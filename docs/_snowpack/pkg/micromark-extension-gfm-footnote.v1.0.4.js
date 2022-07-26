import { blankLine } from '/_snowpack/pkg/micromark-core-commonmark.v1.0.6.js';
import { factorySpace } from '/_snowpack/pkg/micromark-factory-space.v1.0.0.js';
import { markdownLineEndingOrSpace, markdownLineEnding } from '/_snowpack/pkg/micromark-util-character.v1.1.0.js';
import { normalizeIdentifier } from '/_snowpack/pkg/micromark-util-normalize-identifier.v1.0.0.js';
import { sanitizeUri } from '/_snowpack/pkg/micromark-util-sanitize-uri.v1.0.0.js';

/**
 * @typedef {import('micromark-util-types').Extension} Extension
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Exiter} Exiter
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Event} Event
 */
const indent = {
  tokenize: tokenizeIndent,
  partial: true
};
/**
 * @returns {Extension}
 */

function gfmFootnote() {
  /** @type {Extension} */
  return {
    document: {
      [91]: {
        tokenize: tokenizeDefinitionStart,
        continuation: {
          tokenize: tokenizeDefinitionContinuation
        },
        exit: gfmFootnoteDefinitionEnd
      }
    },
    text: {
      [91]: {
        tokenize: tokenizeGfmFootnoteCall
      },
      [93]: {
        add: 'after',
        tokenize: tokenizePotentialGfmFootnoteCall,
        resolveTo: resolveToPotentialGfmFootnoteCall
      }
    }
  }
}
/** @type {Tokenizer} */

function tokenizePotentialGfmFootnoteCall(effects, ok, nok) {
  const self = this;
  let index = self.events.length;
  /** @type {Array<string>} */
  // @ts-expect-error It’s fine!

  const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
  /** @type {Token} */

  let labelStart; // Find an opening.

  while (index--) {
    const token = self.events[index][1];

    if (token.type === 'labelImage') {
      labelStart = token;
      break
    } // Exit if we’ve walked far enough.

    if (
      token.type === 'gfmFootnoteCall' ||
      token.type === 'labelLink' ||
      token.type === 'label' ||
      token.type === 'image' ||
      token.type === 'link'
    ) {
      break
    }
  }

  return start
  /** @type {State} */

  function start(code) {
    if (!labelStart || !labelStart._balanced) {
      return nok(code)
    }

    const id = normalizeIdentifier(
      self.sliceSerialize({
        start: labelStart.end,
        end: self.now()
      })
    );

    if (id.charCodeAt(0) !== 94 || !defined.includes(id.slice(1))) {
      return nok(code)
    }

    effects.enter('gfmFootnoteCallLabelMarker');
    effects.consume(code);
    effects.exit('gfmFootnoteCallLabelMarker');
    return ok(code)
  }
}
/** @type {Resolver} */

function resolveToPotentialGfmFootnoteCall(events, context) {
  let index = events.length;

  while (index--) {
    if (
      events[index][1].type === 'labelImage' &&
      events[index][0] === 'enter'
    ) {
      events[index][1];
      break
    }
  }

  // Change the `labelImageMarker` to a `data`.
  events[index + 1][1].type = 'data';
  events[index + 3][1].type = 'gfmFootnoteCallLabelMarker'; // The whole (without `!`):

  const call = {
    type: 'gfmFootnoteCall',
    start: Object.assign({}, events[index + 3][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  }; // The `^` marker

  const marker = {
    type: 'gfmFootnoteCallMarker',
    start: Object.assign({}, events[index + 3][1].end),
    end: Object.assign({}, events[index + 3][1].end)
  }; // Increment the end 1 character.

  marker.end.column++;
  marker.end.offset++;
  marker.end._bufferIndex++;
  const string = {
    type: 'gfmFootnoteCallString',
    start: Object.assign({}, marker.end),
    end: Object.assign({}, events[events.length - 1][1].start)
  };
  const chunk = {
    type: 'chunkString',
    contentType: 'string',
    start: Object.assign({}, string.start),
    end: Object.assign({}, string.end)
  };
  /** @type {Array<Event>} */

  const replacement = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    events[index + 1],
    events[index + 2],
    ['enter', call, context], // The `[`
    events[index + 3],
    events[index + 4], // The `^`.
    ['enter', marker, context],
    ['exit', marker, context], // Everything in between.
    ['enter', string, context],
    ['enter', chunk, context],
    ['exit', chunk, context],
    ['exit', string, context], // The ending (`]`, properly parsed and labelled).
    events[events.length - 2],
    events[events.length - 1],
    ['exit', call, context]
  ];
  events.splice(index, events.length - index + 1, ...replacement);
  return events
}
/** @type {Tokenizer} */

function tokenizeGfmFootnoteCall(effects, ok, nok) {
  const self = this;
  /** @type {Array<string>} */
  // @ts-expect-error It’s fine!

  const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
  let size = 0;
  /** @type {boolean} */

  let data;
  return start
  /** @type {State} */

  function start(code) {
    effects.enter('gfmFootnoteCall');
    effects.enter('gfmFootnoteCallLabelMarker');
    effects.consume(code);
    effects.exit('gfmFootnoteCallLabelMarker');
    return callStart
  }
  /** @type {State} */

  function callStart(code) {
    if (code !== 94) return nok(code)
    effects.enter('gfmFootnoteCallMarker');
    effects.consume(code);
    effects.exit('gfmFootnoteCallMarker');
    effects.enter('gfmFootnoteCallString');
    effects.enter('chunkString').contentType = 'string';
    return callData
  }
  /** @type {State} */

  function callData(code) {
    /** @type {Token} */
    let token;

    if (code === null || code === 91 || size++ > 999) {
      return nok(code)
    }

    if (code === 93) {
      if (!data) {
        return nok(code)
      }

      effects.exit('chunkString');
      token = effects.exit('gfmFootnoteCallString');
      return defined.includes(normalizeIdentifier(self.sliceSerialize(token)))
        ? end(code)
        : nok(code)
    }

    effects.consume(code);

    if (!markdownLineEndingOrSpace(code)) {
      data = true;
    }

    return code === 92 ? callEscape : callData
  }
  /** @type {State} */

  function callEscape(code) {
    if (code === 91 || code === 92 || code === 93) {
      effects.consume(code);
      size++;
      return callData
    }

    return callData(code)
  }
  /** @type {State} */

  function end(code) {
    effects.enter('gfmFootnoteCallLabelMarker');
    effects.consume(code);
    effects.exit('gfmFootnoteCallLabelMarker');
    effects.exit('gfmFootnoteCall');
    return ok
  }
}
/** @type {Tokenizer} */

function tokenizeDefinitionStart(effects, ok, nok) {
  const self = this;
  /** @type {Array<string>} */
  // @ts-expect-error It’s fine!

  const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
  /** @type {string} */

  let identifier;
  let size = 0;
  /** @type {boolean|undefined} */

  let data;
  return start
  /** @type {State} */

  function start(code) {
    effects.enter('gfmFootnoteDefinition')._container = true;
    effects.enter('gfmFootnoteDefinitionLabel');
    effects.enter('gfmFootnoteDefinitionLabelMarker');
    effects.consume(code);
    effects.exit('gfmFootnoteDefinitionLabelMarker');
    return labelStart
  }
  /** @type {State} */

  function labelStart(code) {
    if (code === 94) {
      effects.enter('gfmFootnoteDefinitionMarker');
      effects.consume(code);
      effects.exit('gfmFootnoteDefinitionMarker');
      effects.enter('gfmFootnoteDefinitionLabelString');
      return atBreak
    }

    return nok(code)
  }
  /** @type {State} */

  function atBreak(code) {
    /** @type {Token} */
    let token;

    if (code === null || code === 91 || size > 999) {
      return nok(code)
    }

    if (code === 93) {
      if (!data) {
        return nok(code)
      }

      token = effects.exit('gfmFootnoteDefinitionLabelString');
      identifier = normalizeIdentifier(self.sliceSerialize(token));
      effects.enter('gfmFootnoteDefinitionLabelMarker');
      effects.consume(code);
      effects.exit('gfmFootnoteDefinitionLabelMarker');
      effects.exit('gfmFootnoteDefinitionLabel');
      return labelAfter
    }

    if (markdownLineEnding(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      size++;
      return atBreak
    }

    effects.enter('chunkString').contentType = 'string';
    return label(code)
  }
  /** @type {State} */

  function label(code) {
    if (
      code === null ||
      markdownLineEnding(code) ||
      code === 91 ||
      code === 93 ||
      size > 999
    ) {
      effects.exit('chunkString');
      return atBreak(code)
    }

    if (!markdownLineEndingOrSpace(code)) {
      data = true;
    }

    size++;
    effects.consume(code);
    return code === 92 ? labelEscape : label
  }
  /** @type {State} */

  function labelEscape(code) {
    if (code === 91 || code === 92 || code === 93) {
      effects.consume(code);
      size++;
      return label
    }

    return label(code)
  }
  /** @type {State} */

  function labelAfter(code) {
    if (code === 58) {
      effects.enter('definitionMarker');
      effects.consume(code);
      effects.exit('definitionMarker'); // Any whitespace after the marker is eaten, forming indented code
      // is not possible.
      // No space is also fine, just like a block quote marker.

      return factorySpace(effects, done, 'gfmFootnoteDefinitionWhitespace')
    }

    return nok(code)
  }
  /** @type {State} */

  function done(code) {
    if (!defined.includes(identifier)) {
      defined.push(identifier);
    }

    return ok(code)
  }
}
/** @type {Tokenizer} */

function tokenizeDefinitionContinuation(effects, ok, nok) {
  // Either a blank line, which is okay, or an indented thing.
  return effects.check(blankLine, ok, effects.attempt(indent, ok, nok))
}
/** @type {Exiter} */

function gfmFootnoteDefinitionEnd(effects) {
  effects.exit('gfmFootnoteDefinition');
}
/** @type {Tokenizer} */

function tokenizeIndent(effects, ok, nok) {
  const self = this;
  return factorySpace(
    effects,
    afterPrefix,
    'gfmFootnoteDefinitionIndent',
    4 + 1
  )
  /** @type {State} */

  function afterPrefix(code) {
    const tail = self.events[self.events.length - 1];
    return tail &&
      tail[1].type === 'gfmFootnoteDefinitionIndent' &&
      tail[2].sliceSerialize(tail[1], true).length === 4
      ? ok(code)
      : nok(code)
  }
}

/**
 * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
 * @typedef {import('micromark-util-types').CompileContext} CompileContext
 *
 * @typedef Options
 * @property {string} [clobberPrefix='user-content-']
 *   Prefix to use before the `id` attribute to prevent it from *clobbering*.
 *   attributes.
 *   DOM clobbering is this:
 *
 *   ```html
 *   <p id=x></p>
 *   <script>alert(x)</script>
 *   ```
 *
 *   Elements by their ID are made available in browsers on the `window` object.
 *   Using a prefix prevents this from being a problem.
 * @property {string} [label='Footnotes']
 *   Label to use for the footnotes section.
 *   Affects screen reader users.
 *   Change it if you’re authoring in a different language.
 * @property {string} [backLabel='Back to content']
 *   Label to use from backreferences back to their footnote call.
 *   Affects screen reader users.
 *   Change it if you’re authoring in a different language.
 */
const own = {}.hasOwnProperty;
/**
 * @param {Options} [options={}]
 * @returns {HtmlExtension}
 */

function gfmFootnoteHtml(options = {}) {
  const label = options.label || 'Footnotes';
  const backLabel = options.backLabel || 'Back to content';
  const clobberPrefix =
    options.clobberPrefix === undefined || options.clobberPrefix === null
      ? 'user-content-'
      : options.clobberPrefix;
  return {
    enter: {
      gfmFootnoteDefinition() {
        const stack =
          /** @type {Array<boolean>} */
          this.getData('tightStack');
        stack.push(false);
      },

      gfmFootnoteDefinitionLabelString() {
        this.buffer();
      },

      gfmFootnoteCallString() {
        this.buffer();
      }
    },
    exit: {
      gfmFootnoteDefinition() {
        let definitions =
          /** @type {Record<string, string>} */
          this.getData('gfmFootnoteDefinitions');
        const footnoteStack =
          /** @type {Array<string>} */
          this.getData('gfmFootnoteDefinitionStack');
        const tightStack =
          /** @type {Array<boolean>} */
          this.getData('tightStack');
        const current = footnoteStack.pop();
        const value = this.resume();

        if (!definitions) {
          this.setData('gfmFootnoteDefinitions', (definitions = {}));
        }

        if (!own.call(definitions, current)) definitions[current] = value;
        tightStack.pop();
        this.setData('slurpOneLineEnding', true); // “Hack” to prevent a line ending from showing up if we’re in a definition in
        // an empty list item.

        this.setData('lastWasTag');
      },

      gfmFootnoteDefinitionLabelString(token) {
        let footnoteStack =
          /** @type {Array<string>} */
          this.getData('gfmFootnoteDefinitionStack');

        if (!footnoteStack) {
          this.setData('gfmFootnoteDefinitionStack', (footnoteStack = []));
        }

        footnoteStack.push(normalizeIdentifier(this.sliceSerialize(token)));
        this.resume(); // Drop the label.

        this.buffer(); // Get ready for a value.
      },

      gfmFootnoteCallString(token) {
        let calls =
          /** @type {Array<string>|undefined} */
          this.getData('gfmFootnoteCallOrder');
        let counts =
          /** @type {Record<string, number>|undefined} */
          this.getData('gfmFootnoteCallCounts');
        const id = normalizeIdentifier(this.sliceSerialize(token));
        /** @type {number} */

        let counter;
        this.resume();
        if (!calls) this.setData('gfmFootnoteCallOrder', (calls = []));
        if (!counts) this.setData('gfmFootnoteCallCounts', (counts = {}));
        const index = calls.indexOf(id);
        const safeId = sanitizeUri(id.toLowerCase());

        if (index === -1) {
          calls.push(id);
          counts[id] = 1;
          counter = calls.length;
        } else {
          counts[id]++;
          counter = index + 1;
        }

        const reuseCounter = counts[id];
        this.tag(
          '<sup><a href="#' +
            clobberPrefix +
            'fn-' +
            safeId +
            '" id="' +
            clobberPrefix +
            'fnref-' +
            safeId +
            (reuseCounter > 1 ? '-' + reuseCounter : '') +
            '" data-footnote-ref="" aria-describedby="footnote-label">' +
            String(counter) +
            '</a></sup>'
        );
      },

      null() {
        const calls =
          /** @type {Array<string>} */
          this.getData('gfmFootnoteCallOrder') || [];
        const counts =
          /** @type {Record<string, number>} */
          this.getData('gfmFootnoteCallCounts') || {};
        const definitions =
          /** @type {Record<string, string>} */
          this.getData('gfmFootnoteDefinitions') || {};
        let index = -1;

        if (calls.length > 0) {
          this.lineEndingIfNeeded();
          this.tag(
            '<section data-footnotes="" class="footnotes"><h2 id="footnote-label" class="sr-only">'
          );
          this.raw(this.encode(label));
          this.tag('</h2>');
          this.lineEndingIfNeeded();
          this.tag('<ol>');
        }

        while (++index < calls.length) {
          // Called definitions are always defined.
          const id = calls[index];
          const safeId = sanitizeUri(id.toLowerCase());
          let referenceIndex = 0;
          /** @type {Array<string>} */

          const references = [];

          while (++referenceIndex <= counts[id]) {
            references.push(
              '<a href="#' +
                clobberPrefix +
                'fnref-' +
                safeId +
                (referenceIndex > 1 ? '-' + referenceIndex : '') +
                '" data-footnote-backref="" class="data-footnote-backref" aria-label="' +
                this.encode(backLabel) +
                '">↩' +
                (referenceIndex > 1
                  ? '<sup>' + referenceIndex + '</sup>'
                  : '') +
                '</a>'
            );
          }

          const reference = references.join(' ');
          let injected = false;
          this.lineEndingIfNeeded();
          this.tag('<li id="' + clobberPrefix + 'fn-' + safeId + '">');
          this.lineEndingIfNeeded();
          this.tag(
            definitions[id].replace(
              /<\/p>(?:\r?\n|\r)?$/,
              (
                /** @type {string} */
                $0
              ) => {
                injected = true;
                return ' ' + reference + $0
              }
            )
          );

          if (!injected) {
            this.lineEndingIfNeeded();
            this.tag(reference);
          }

          this.lineEndingIfNeeded();
          this.tag('</li>');
        }

        if (calls.length > 0) {
          this.lineEndingIfNeeded();
          this.tag('</ol>');
          this.lineEndingIfNeeded();
          this.tag('</section>');
        }
      }
    }
  }
}

export { gfmFootnote, gfmFootnoteHtml };
