import { combineExtensions } from '/_snowpack/pkg/micromark-util-combine-extensions.v1.0.0.js';
import { factorySpace } from '/_snowpack/pkg/micromark-factory-space.v1.0.0.js';
import { markdownLineEnding } from '/_snowpack/pkg/micromark-util-character.v1.1.0.js';
import { splice, push } from '/_snowpack/pkg/micromark-util-chunked.v1.0.0.js';
import { blankLine, content as content$1, list, blockQuote, definition, codeIndented, headingAtx, thematicBreak, setextUnderline, htmlFlow, codeFenced, characterReference, characterEscape, lineEnding, labelStartImage, attention, autolink, htmlText, labelStartLink, hardBreakEscape, labelEnd, codeText } from '/_snowpack/pkg/micromark-core-commonmark.v1.0.6.js';
import { resolveAll } from '/_snowpack/pkg/micromark-util-resolve-all.v1.0.0.js';

/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 */

/** @type {InitialConstruct} */
const content = {
  tokenize: initializeContent
};
/** @type {Initializer} */

function initializeContent(effects) {
  const contentStart = effects.attempt(
    this.parser.constructs.contentInitial,
    afterContentStartConstruct,
    paragraphInitial
  );
  /** @type {Token} */

  let previous;
  return contentStart
  /** @type {State} */

  function afterContentStartConstruct(code) {
    if (code === null) {
      effects.consume(code);
      return
    }

    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    return factorySpace(effects, contentStart, 'linePrefix')
  }
  /** @type {State} */

  function paragraphInitial(code) {
    effects.enter('paragraph');
    return lineStart(code)
  }
  /** @type {State} */

  function lineStart(code) {
    const token = effects.enter('chunkText', {
      contentType: 'text',
      previous
    });

    if (previous) {
      previous.next = token;
    }

    previous = token;
    return data(code)
  }
  /** @type {State} */

  function data(code) {
    if (code === null) {
      effects.exit('chunkText');
      effects.exit('paragraph');
      effects.consume(code);
      return
    }

    if (markdownLineEnding(code)) {
      effects.consume(code);
      effects.exit('chunkText');
      return lineStart
    } // Data.

    effects.consume(code);
    return data
  }
}

/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Point} Point
 */
/** @type {InitialConstruct} */

const document = {
  tokenize: initializeDocument
};
/** @type {Construct} */

const containerConstruct = {
  tokenize: tokenizeContainer
};
/** @type {Initializer} */

function initializeDocument(effects) {
  const self = this;
  /** @type {StackItem[]} */

  const stack = [];
  let continued = 0;
  /** @type {TokenizeContext|undefined} */

  let childFlow;
  /** @type {Token|undefined} */

  let childToken;
  /** @type {number} */

  let lineStartOffset;
  return start
  /** @type {State} */

  function start(code) {
    // First we iterate through the open blocks, starting with the root
    // document, and descending through last children down to the last open
    // block.
    // Each block imposes a condition that the line must satisfy if the block is
    // to remain open.
    // For example, a block quote requires a `>` character.
    // A paragraph requires a non-blank line.
    // In this phase we may match all or just some of the open blocks.
    // But we cannot close unmatched blocks yet, because we may have a lazy
    // continuation line.
    if (continued < stack.length) {
      const item = stack[continued];
      self.containerState = item[1];
      return effects.attempt(
        item[0].continuation,
        documentContinue,
        checkNewContainers
      )(code)
    } // Done.

    return checkNewContainers(code)
  }
  /** @type {State} */

  function documentContinue(code) {
    continued++; // Note: this field is called `_closeFlow` but it also closes containers.
    // Perhaps a good idea to rename it but it’s already used in the wild by
    // extensions.

    if (self.containerState._closeFlow) {
      self.containerState._closeFlow = undefined;

      if (childFlow) {
        closeFlow();
      } // Note: this algorithm for moving events around is similar to the
      // algorithm when dealing with lazy lines in `writeToChild`.

      const indexBeforeExits = self.events.length;
      let indexBeforeFlow = indexBeforeExits;
      /** @type {Point|undefined} */

      let point; // Find the flow chunk.

      while (indexBeforeFlow--) {
        if (
          self.events[indexBeforeFlow][0] === 'exit' &&
          self.events[indexBeforeFlow][1].type === 'chunkFlow'
        ) {
          point = self.events[indexBeforeFlow][1].end;
          break
        }
      }

      exitContainers(continued); // Fix positions.

      let index = indexBeforeExits;

      while (index < self.events.length) {
        self.events[index][1].end = Object.assign({}, point);
        index++;
      } // Inject the exits earlier (they’re still also at the end).

      splice(
        self.events,
        indexBeforeFlow + 1,
        0,
        self.events.slice(indexBeforeExits)
      ); // Discard the duplicate exits.

      self.events.length = index;
      return checkNewContainers(code)
    }

    return start(code)
  }
  /** @type {State} */

  function checkNewContainers(code) {
    // Next, after consuming the continuation markers for existing blocks, we
    // look for new block starts (e.g. `>` for a block quote).
    // If we encounter a new block start, we close any blocks unmatched in
    // step 1 before creating the new block as a child of the last matched
    // block.
    if (continued === stack.length) {
      // No need to `check` whether there’s a container, of `exitContainers`
      // would be moot.
      // We can instead immediately `attempt` to parse one.
      if (!childFlow) {
        return documentContinued(code)
      } // If we have concrete content, such as block HTML or fenced code,
      // we can’t have containers “pierce” into them, so we can immediately
      // start.

      if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
        return flowStart(code)
      } // If we do have flow, it could still be a blank line,
      // but we’d be interrupting it w/ a new container if there’s a current
      // construct.

      self.interrupt = Boolean(
        childFlow.currentConstruct && !childFlow._gfmTableDynamicInterruptHack
      );
    } // Check if there is a new container.

    self.containerState = {};
    return effects.check(
      containerConstruct,
      thereIsANewContainer,
      thereIsNoNewContainer
    )(code)
  }
  /** @type {State} */

  function thereIsANewContainer(code) {
    if (childFlow) closeFlow();
    exitContainers(continued);
    return documentContinued(code)
  }
  /** @type {State} */

  function thereIsNoNewContainer(code) {
    self.parser.lazy[self.now().line] = continued !== stack.length;
    lineStartOffset = self.now().offset;
    return flowStart(code)
  }
  /** @type {State} */

  function documentContinued(code) {
    // Try new containers.
    self.containerState = {};
    return effects.attempt(
      containerConstruct,
      containerContinue,
      flowStart
    )(code)
  }
  /** @type {State} */

  function containerContinue(code) {
    continued++;
    stack.push([self.currentConstruct, self.containerState]); // Try another.

    return documentContinued(code)
  }
  /** @type {State} */

  function flowStart(code) {
    if (code === null) {
      if (childFlow) closeFlow();
      exitContainers(0);
      effects.consume(code);
      return
    }

    childFlow = childFlow || self.parser.flow(self.now());
    effects.enter('chunkFlow', {
      contentType: 'flow',
      previous: childToken,
      _tokenizer: childFlow
    });
    return flowContinue(code)
  }
  /** @type {State} */

  function flowContinue(code) {
    if (code === null) {
      writeToChild(effects.exit('chunkFlow'), true);
      exitContainers(0);
      effects.consume(code);
      return
    }

    if (markdownLineEnding(code)) {
      effects.consume(code);
      writeToChild(effects.exit('chunkFlow')); // Get ready for the next line.

      continued = 0;
      self.interrupt = undefined;
      return start
    }

    effects.consume(code);
    return flowContinue
  }
  /**
   * @param {Token} token
   * @param {boolean} [eof]
   * @returns {void}
   */

  function writeToChild(token, eof) {
    const stream = self.sliceStream(token);
    if (eof) stream.push(null);
    token.previous = childToken;
    if (childToken) childToken.next = token;
    childToken = token;
    childFlow.defineSkip(token.start);
    childFlow.write(stream); // Alright, so we just added a lazy line:
    //
    // ```markdown
    // > a
    // b.
    //
    // Or:
    //
    // > ~~~c
    // d
    //
    // Or:
    //
    // > | e |
    // f
    // ```
    //
    // The construct in the second example (fenced code) does not accept lazy
    // lines, so it marked itself as done at the end of its first line, and
    // then the content construct parses `d`.
    // Most constructs in markdown match on the first line: if the first line
    // forms a construct, a non-lazy line can’t “unmake” it.
    //
    // The construct in the third example is potentially a GFM table, and
    // those are *weird*.
    // It *could* be a table, from the first line, if the following line
    // matches a condition.
    // In this case, that second line is lazy, which “unmakes” the first line
    // and turns the whole into one content block.
    //
    // We’ve now parsed the non-lazy and the lazy line, and can figure out
    // whether the lazy line started a new flow block.
    // If it did, we exit the current containers between the two flow blocks.

    if (self.parser.lazy[token.start.line]) {
      let index = childFlow.events.length;

      while (index--) {
        if (
          // The token starts before the line ending…
          childFlow.events[index][1].start.offset < lineStartOffset && // …and either is not ended yet…
          (!childFlow.events[index][1].end || // …or ends after it.
            childFlow.events[index][1].end.offset > lineStartOffset)
        ) {
          // Exit: there’s still something open, which means it’s a lazy line
          // part of something.
          return
        }
      } // Note: this algorithm for moving events around is similar to the
      // algorithm when closing flow in `documentContinue`.

      const indexBeforeExits = self.events.length;
      let indexBeforeFlow = indexBeforeExits;
      /** @type {boolean|undefined} */

      let seen;
      /** @type {Point|undefined} */

      let point; // Find the previous chunk (the one before the lazy line).

      while (indexBeforeFlow--) {
        if (
          self.events[indexBeforeFlow][0] === 'exit' &&
          self.events[indexBeforeFlow][1].type === 'chunkFlow'
        ) {
          if (seen) {
            point = self.events[indexBeforeFlow][1].end;
            break
          }

          seen = true;
        }
      }

      exitContainers(continued); // Fix positions.

      index = indexBeforeExits;

      while (index < self.events.length) {
        self.events[index][1].end = Object.assign({}, point);
        index++;
      } // Inject the exits earlier (they’re still also at the end).

      splice(
        self.events,
        indexBeforeFlow + 1,
        0,
        self.events.slice(indexBeforeExits)
      ); // Discard the duplicate exits.

      self.events.length = index;
    }
  }
  /**
   * @param {number} size
   * @returns {void}
   */

  function exitContainers(size) {
    let index = stack.length; // Exit open containers.

    while (index-- > size) {
      const entry = stack[index];
      self.containerState = entry[1];
      entry[0].exit.call(self, effects);
    }

    stack.length = size;
  }

  function closeFlow() {
    childFlow.write([null]);
    childToken = undefined;
    childFlow = undefined;
    self.containerState._closeFlow = undefined;
  }
}
/** @type {Tokenizer} */

function tokenizeContainer(effects, ok, nok) {
  return factorySpace(
    effects,
    effects.attempt(this.parser.constructs.document, ok, nok),
    'linePrefix',
    this.parser.constructs.disable.null.includes('codeIndented') ? undefined : 4
  )
}

/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').State} State
 */

/** @type {InitialConstruct} */
const flow = {
  tokenize: initializeFlow
};
/** @type {Initializer} */

function initializeFlow(effects) {
  const self = this;
  const initial = effects.attempt(
    // Try to parse a blank line.
    blankLine,
    atBlankEnding, // Try to parse initial flow (essentially, only code).
    effects.attempt(
      this.parser.constructs.flowInitial,
      afterConstruct,
      factorySpace(
        effects,
        effects.attempt(
          this.parser.constructs.flow,
          afterConstruct,
          effects.attempt(content$1, afterConstruct)
        ),
        'linePrefix'
      )
    )
  );
  return initial
  /** @type {State} */

  function atBlankEnding(code) {
    if (code === null) {
      effects.consume(code);
      return
    }

    effects.enter('lineEndingBlank');
    effects.consume(code);
    effects.exit('lineEndingBlank');
    self.currentConstruct = undefined;
    return initial
  }
  /** @type {State} */

  function afterConstruct(code) {
    if (code === null) {
      effects.consume(code);
      return
    }

    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    self.currentConstruct = undefined;
    return initial
  }
}

/**
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */
const resolver = {
  resolveAll: createResolver()
};
const string = initializeFactory('string');
const text = initializeFactory('text');
/**
 * @param {'string'|'text'} field
 * @returns {InitialConstruct}
 */

function initializeFactory(field) {
  return {
    tokenize: initializeText,
    resolveAll: createResolver(
      field === 'text' ? resolveAllLineSuffixes : undefined
    )
  }
  /** @type {Initializer} */

  function initializeText(effects) {
    const self = this;
    const constructs = this.parser.constructs[field];
    const text = effects.attempt(constructs, start, notText);
    return start
    /** @type {State} */

    function start(code) {
      return atBreak(code) ? text(code) : notText(code)
    }
    /** @type {State} */

    function notText(code) {
      if (code === null) {
        effects.consume(code);
        return
      }

      effects.enter('data');
      effects.consume(code);
      return data
    }
    /** @type {State} */

    function data(code) {
      if (atBreak(code)) {
        effects.exit('data');
        return text(code)
      } // Data.

      effects.consume(code);
      return data
    }
    /**
     * @param {Code} code
     * @returns {boolean}
     */

    function atBreak(code) {
      if (code === null) {
        return true
      }

      const list = constructs[code];
      let index = -1;

      if (list) {
        while (++index < list.length) {
          const item = list[index];

          if (!item.previous || item.previous.call(self, self.previous)) {
            return true
          }
        }
      }

      return false
    }
  }
}
/**
 * @param {Resolver} [extraResolver]
 * @returns {Resolver}
 */

function createResolver(extraResolver) {
  return resolveAllText
  /** @type {Resolver} */

  function resolveAllText(events, context) {
    let index = -1;
    /** @type {number|undefined} */

    let enter; // A rather boring computation (to merge adjacent `data` events) which
    // improves mm performance by 29%.

    while (++index <= events.length) {
      if (enter === undefined) {
        if (events[index] && events[index][1].type === 'data') {
          enter = index;
          index++;
        }
      } else if (!events[index] || events[index][1].type !== 'data') {
        // Don’t do anything if there is one data token.
        if (index !== enter + 2) {
          events[enter][1].end = events[index - 1][1].end;
          events.splice(enter + 2, index - enter - 2);
          index = enter + 2;
        }

        enter = undefined;
      }
    }

    return extraResolver ? extraResolver(events, context) : events
  }
}
/**
 * A rather ugly set of instructions which again looks at chunks in the input
 * stream.
 * The reason to do this here is that it is *much* faster to parse in reverse.
 * And that we can’t hook into `null` to split the line suffix before an EOF.
 * To do: figure out if we can make this into a clean utility, or even in core.
 * As it will be useful for GFMs literal autolink extension (and maybe even
 * tables?)
 *
 * @type {Resolver}
 */

function resolveAllLineSuffixes(events, context) {
  let eventIndex = 0; // Skip first.

  while (++eventIndex <= events.length) {
    if (
      (eventIndex === events.length ||
        events[eventIndex][1].type === 'lineEnding') &&
      events[eventIndex - 1][1].type === 'data'
    ) {
      const data = events[eventIndex - 1][1];
      const chunks = context.sliceStream(data);
      let index = chunks.length;
      let bufferIndex = -1;
      let size = 0;
      /** @type {boolean|undefined} */

      let tabs;

      while (index--) {
        const chunk = chunks[index];

        if (typeof chunk === 'string') {
          bufferIndex = chunk.length;

          while (chunk.charCodeAt(bufferIndex - 1) === 32) {
            size++;
            bufferIndex--;
          }

          if (bufferIndex) break
          bufferIndex = -1;
        } // Number
        else if (chunk === -2) {
          tabs = true;
          size++;
        } else if (chunk === -1) ; else {
          // Replacement character, exit.
          index++;
          break
        }
      }

      if (size) {
        const token = {
          type:
            eventIndex === events.length || tabs || size < 2
              ? 'lineSuffix'
              : 'hardBreakTrailing',
          start: {
            line: data.end.line,
            column: data.end.column - size,
            offset: data.end.offset - size,
            _index: data.start._index + index,
            _bufferIndex: index
              ? bufferIndex
              : data.start._bufferIndex + bufferIndex
          },
          end: Object.assign({}, data.end)
        };
        data.end = Object.assign({}, token.start);

        if (data.start.offset === data.end.offset) {
          Object.assign(data, token);
        } else {
          events.splice(
            eventIndex,
            0,
            ['enter', token, context],
            ['exit', token, context]
          );
          eventIndex += 2;
        }
      }

      eventIndex++;
    }
  }

  return events
}

/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Chunk} Chunk
 * @typedef {import('micromark-util-types').Point} Point
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').ConstructRecord} ConstructRecord
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').ParseContext} ParseContext
 */

/**
 * Create a tokenizer.
 * Tokenizers deal with one type of data (e.g., containers, flow, text).
 * The parser is the object dealing with it all.
 * `initialize` works like other constructs, except that only its `tokenize`
 * function is used, in which case it doesn’t receive an `ok` or `nok`.
 * `from` can be given to set the point before the first character, although
 * when further lines are indented, they must be set with `defineSkip`.
 *
 * @param {ParseContext} parser
 * @param {InitialConstruct} initialize
 * @param {Omit<Point, '_index'|'_bufferIndex'>} [from]
 * @returns {TokenizeContext}
 */
function createTokenizer(parser, initialize, from) {
  /** @type {Point} */
  let point = Object.assign(
    from
      ? Object.assign({}, from)
      : {
          line: 1,
          column: 1,
          offset: 0
        },
    {
      _index: 0,
      _bufferIndex: -1
    }
  );
  /** @type {Record<string, number>} */

  const columnStart = {};
  /** @type {Construct[]} */

  const resolveAllConstructs = [];
  /** @type {Chunk[]} */

  let chunks = [];
  /** @type {Token[]} */

  let stack = [];
  /**
   * Tools used for tokenizing.
   *
   * @type {Effects}
   */

  const effects = {
    consume,
    enter,
    exit,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  /**
   * State and tools for resolving and serializing.
   *
   * @type {TokenizeContext}
   */

  const context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write
  };
  /**
   * The state function.
   *
   * @type {State|void}
   */

  let state = initialize.tokenize.call(context, effects);

  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }

  return context
  /** @type {TokenizeContext['write']} */

  function write(slice) {
    chunks = push(chunks, slice);
    main(); // Exit if we’re not done, resolve might change stuff.

    if (chunks[chunks.length - 1] !== null) {
      return []
    }

    addResult(initialize, 0); // Otherwise, resolve, and exit.

    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events
  } //
  // Tools.
  //

  /** @type {TokenizeContext['sliceSerialize']} */

  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs)
  }
  /** @type {TokenizeContext['sliceStream']} */

  function sliceStream(token) {
    return sliceChunks(chunks, token)
  }
  /** @type {TokenizeContext['now']} */

  function now() {
    return Object.assign({}, point)
  }
  /** @type {TokenizeContext['defineSkip']} */

  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  } //
  // State management.
  //

  /**
   * Main loop (note that `_index` and `_bufferIndex` in `point` are modified by
   * `consume`).
   * Here is where we walk through the chunks, which either include strings of
   * several characters, or numerical character codes.
   * The reason to do this in a loop instead of a call is so the stack can
   * drain.
   *
   * @returns {void}
   */

  function main() {
    /** @type {number} */
    let chunkIndex;

    while (point._index < chunks.length) {
      const chunk = chunks[point._index]; // If we’re in a buffer chunk, loop through it.

      if (typeof chunk === 'string') {
        chunkIndex = point._index;

        if (point._bufferIndex < 0) {
          point._bufferIndex = 0;
        }

        while (
          point._index === chunkIndex &&
          point._bufferIndex < chunk.length
        ) {
          go(chunk.charCodeAt(point._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  /**
   * Deal with one code.
   *
   * @param {Code} code
   * @returns {void}
   */

  function go(code) {
    state = state(code);
  }
  /** @type {Effects['consume']} */

  function consume(code) {
    if (markdownLineEnding(code)) {
      point.line++;
      point.column = 1;
      point.offset += code === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code !== -1) {
      point.column++;
      point.offset++;
    } // Not in a string chunk.

    if (point._bufferIndex < 0) {
      point._index++;
    } else {
      point._bufferIndex++; // At end of string chunk.
      // @ts-expect-error Points w/ non-negative `_bufferIndex` reference
      // strings.

      if (point._bufferIndex === chunks[point._index].length) {
        point._bufferIndex = -1;
        point._index++;
      }
    } // Expose the previous character.

    context.previous = code; // Mark as consumed.
  }
  /** @type {Effects['enter']} */

  function enter(type, fields) {
    /** @type {Token} */
    // @ts-expect-error Patch instead of assign required fields to help GC.
    const token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(['enter', token, context]);
    stack.push(token);
    return token
  }
  /** @type {Effects['exit']} */

  function exit(type) {
    const token = stack.pop();
    token.end = now();
    context.events.push(['exit', token, context]);
    return token
  }
  /**
   * Use results.
   *
   * @type {ReturnHandle}
   */

  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  /**
   * Discard results.
   *
   * @type {ReturnHandle}
   */

  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  /**
   * Factory to attempt/check/interrupt.
   *
   * @param {ReturnHandle} onreturn
   * @param {Record<string, unknown>} [fields]
   */

  function constructFactory(onreturn, fields) {
    return hook
    /**
     * Handle either an object mapping codes to constructs, a list of
     * constructs, or a single construct.
     *
     * @param {Construct|Construct[]|ConstructRecord} constructs
     * @param {State} returnState
     * @param {State} [bogusState]
     * @returns {State}
     */

    function hook(constructs, returnState, bogusState) {
      /** @type {Construct[]} */
      let listOfConstructs;
      /** @type {number} */

      let constructIndex;
      /** @type {Construct} */

      let currentConstruct;
      /** @type {Info} */

      let info;
      return Array.isArray(constructs)
        ? /* c8 ignore next 1 */
          handleListOfConstructs(constructs)
        : 'tokenize' in constructs // @ts-expect-error Looks like a construct.
        ? handleListOfConstructs([constructs])
        : handleMapOfConstructs(constructs)
      /**
       * Handle a list of construct.
       *
       * @param {ConstructRecord} map
       * @returns {State}
       */

      function handleMapOfConstructs(map) {
        return start
        /** @type {State} */

        function start(code) {
          const def = code !== null && map[code];
          const all = code !== null && map.null;
          const list = [
            // To do: add more extension tests.

            /* c8 ignore next 2 */
            ...(Array.isArray(def) ? def : def ? [def] : []),
            ...(Array.isArray(all) ? all : all ? [all] : [])
          ];
          return handleListOfConstructs(list)(code)
        }
      }
      /**
       * Handle a list of construct.
       *
       * @param {Construct[]} list
       * @returns {State}
       */

      function handleListOfConstructs(list) {
        listOfConstructs = list;
        constructIndex = 0;

        if (list.length === 0) {
          return bogusState
        }

        return handleConstruct(list[constructIndex])
      }
      /**
       * Handle a single construct.
       *
       * @param {Construct} construct
       * @returns {State}
       */

      function handleConstruct(construct) {
        return start
        /** @type {State} */

        function start(code) {
          // To do: not needed to store if there is no bogus state, probably?
          // Currently doesn’t work because `inspect` in document does a check
          // w/o a bogus, which doesn’t make sense. But it does seem to help perf
          // by not storing.
          info = store();
          currentConstruct = construct;

          if (!construct.partial) {
            context.currentConstruct = construct;
          }

          if (
            construct.name &&
            context.parser.constructs.disable.null.includes(construct.name)
          ) {
            return nok()
          }

          return construct.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            fields ? Object.assign(Object.create(context), fields) : context,
            effects,
            ok,
            nok
          )(code)
        }
      }
      /** @type {State} */

      function ok(code) {
        onreturn(currentConstruct, info);
        return returnState
      }
      /** @type {State} */

      function nok(code) {
        info.restore();

        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex])
        }

        return bogusState
      }
    }
  }
  /**
   * @param {Construct} construct
   * @param {number} from
   * @returns {void}
   */

  function addResult(construct, from) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }

    if (construct.resolve) {
      splice(
        context.events,
        from,
        context.events.length - from,
        construct.resolve(context.events.slice(from), context)
      );
    }

    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  /**
   * Store state.
   *
   * @returns {Info}
   */

  function store() {
    const startPoint = now();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    }
    /**
     * Restore state.
     *
     * @returns {void}
     */

    function restore() {
      point = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  /**
   * Move the current point a bit forward in the line when it’s on a column
   * skip.
   *
   * @returns {void}
   */

  function accountForPotentialSkip() {
    if (point.line in columnStart && point.column < 2) {
      point.column = columnStart[point.line];
      point.offset += columnStart[point.line] - 1;
    }
  }
}
/**
 * Get the chunks from a slice of chunks in the range of a token.
 *
 * @param {Chunk[]} chunks
 * @param {Pick<Token, 'start'|'end'>} token
 * @returns {Chunk[]}
 */

function sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  /** @type {Chunk[]} */

  let view;

  if (startIndex === endIndex) {
    // @ts-expect-error `_bufferIndex` is used on string chunks.
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);

    if (startBufferIndex > -1) {
      // @ts-expect-error `_bufferIndex` is used on string chunks.
      view[0] = view[0].slice(startBufferIndex);
    }

    if (endBufferIndex > 0) {
      // @ts-expect-error `_bufferIndex` is used on string chunks.
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }

  return view
}
/**
 * Get the string value of a slice of chunks.
 *
 * @param {Chunk[]} chunks
 * @param {boolean} [expandTabs=false]
 * @returns {string}
 */

function serializeChunks(chunks, expandTabs) {
  let index = -1;
  /** @type {string[]} */

  const result = [];
  /** @type {boolean|undefined} */

  let atTab;

  while (++index < chunks.length) {
    const chunk = chunks[index];
    /** @type {string} */

    let value;

    if (typeof chunk === 'string') {
      value = chunk;
    } else
      switch (chunk) {
        case -5: {
          value = '\r';
          break
        }

        case -4: {
          value = '\n';
          break
        }

        case -3: {
          value = '\r' + '\n';
          break
        }

        case -2: {
          value = expandTabs ? ' ' : '\t';
          break
        }

        case -1: {
          if (!expandTabs && atTab) continue
          value = ' ';
          break
        }

        default: {
          // Currently only replacement character.
          value = String.fromCharCode(chunk);
        }
      }

    atTab = chunk === -2;
    result.push(value);
  }

  return result.join('')
}

/**
 * @typedef {import('micromark-util-types').Extension} Extension
 */
/** @type {Extension['document']} */

const document$1 = {
  [42]: list,
  [43]: list,
  [45]: list,
  [48]: list,
  [49]: list,
  [50]: list,
  [51]: list,
  [52]: list,
  [53]: list,
  [54]: list,
  [55]: list,
  [56]: list,
  [57]: list,
  [62]: blockQuote
};
/** @type {Extension['contentInitial']} */

const contentInitial = {
  [91]: definition
};
/** @type {Extension['flowInitial']} */

const flowInitial = {
  [-2]: codeIndented,
  [-1]: codeIndented,
  [32]: codeIndented
};
/** @type {Extension['flow']} */

const flow$1 = {
  [35]: headingAtx,
  [42]: thematicBreak,
  [45]: [setextUnderline, thematicBreak],
  [60]: htmlFlow,
  [61]: setextUnderline,
  [95]: thematicBreak,
  [96]: codeFenced,
  [126]: codeFenced
};
/** @type {Extension['string']} */

const string$1 = {
  [38]: characterReference,
  [92]: characterEscape
};
/** @type {Extension['text']} */

const text$1 = {
  [-5]: lineEnding,
  [-4]: lineEnding,
  [-3]: lineEnding,
  [33]: labelStartImage,
  [38]: characterReference,
  [42]: attention,
  [60]: [autolink, htmlText],
  [91]: labelStartLink,
  [92]: [hardBreakEscape, characterEscape],
  [93]: labelEnd,
  [95]: attention,
  [96]: codeText
};
/** @type {Extension['insideSpan']} */

const insideSpan = {
  null: [attention, resolver]
};
/** @type {Extension['attentionMarkers']} */

const attentionMarkers = {
  null: [42, 95]
};
/** @type {Extension['disable']} */

const disable = {
  null: []
};

var defaultConstructs = /*#__PURE__*/Object.freeze({
  __proto__: null,
  document: document$1,
  contentInitial: contentInitial,
  flowInitial: flowInitial,
  flow: flow$1,
  string: string$1,
  text: text$1,
  insideSpan: insideSpan,
  attentionMarkers: attentionMarkers,
  disable: disable
});

/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').FullNormalizedExtension} FullNormalizedExtension
 * @typedef {import('micromark-util-types').ParseOptions} ParseOptions
 * @typedef {import('micromark-util-types').ParseContext} ParseContext
 * @typedef {import('micromark-util-types').Create} Create
 */
/**
 * @param {ParseOptions} [options]
 * @returns {ParseContext}
 */

function parse(options = {}) {
  /** @type {FullNormalizedExtension} */
  // @ts-expect-error `defaultConstructs` is full, so the result will be too.
  const constructs = combineExtensions(
    // @ts-expect-error Same as above.
    [defaultConstructs].concat(options.extensions || [])
  );
  /** @type {ParseContext} */

  const parser = {
    defined: [],
    lazy: {},
    constructs,
    content: create(content),
    document: create(document),
    flow: create(flow),
    string: create(string),
    text: create(text)
  };
  return parser
  /**
   * @param {InitialConstruct} initial
   */

  function create(initial) {
    return creator
    /** @type {Create} */

    function creator(from) {
      return createTokenizer(parser, initial, from)
    }
  }
}

export { parse };
