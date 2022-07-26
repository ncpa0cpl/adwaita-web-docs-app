import { factorySpace } from '/_snowpack/pkg/micromark-factory-space.v1.0.0.js';
import { markdownLineEndingOrSpace, markdownLineEnding } from '/_snowpack/pkg/micromark-util-character.v1.1.0.js';

/**
 * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
 */

/** @type {HtmlExtension} */
const gfmTaskListItemHtml = {
  enter: {
    taskListCheck() {
      this.tag('<input type="checkbox" disabled="" ');
    }
  },
  exit: {
    taskListCheck() {
      this.tag('/>');
    },

    taskListCheckValueChecked() {
      this.tag('checked="" ');
    }
  }
};

/**
 * @typedef {import('micromark-util-types').Extension} Extension
 * @typedef {import('micromark-util-types').ConstructRecord} ConstructRecord
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Previous} Previous
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Code} Code
 */
const tasklistCheck = {
  tokenize: tokenizeTasklistCheck
};
const gfmTaskListItem = {
  text: {
    [91]: tasklistCheck
  }
};
/** @type {Tokenizer} */

function tokenizeTasklistCheck(effects, ok, nok) {
  const self = this;
  return open
  /** @type {State} */

  function open(code) {
    if (
      // Exit if there’s stuff before.
      self.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !self._gfmTasklistFirstContentOfListItem
    ) {
      return nok(code)
    }

    effects.enter('taskListCheck');
    effects.enter('taskListCheckMarker');
    effects.consume(code);
    effects.exit('taskListCheckMarker');
    return inside
  }
  /** @type {State} */

  function inside(code) {
    // To match how GH works in comments, use `markdownSpace` (`[ \t]`) instead
    // of `markdownLineEndingOrSpace` (`[ \t\r\n]`).
    if (markdownLineEndingOrSpace(code)) {
      effects.enter('taskListCheckValueUnchecked');
      effects.consume(code);
      effects.exit('taskListCheckValueUnchecked');
      return close
    }

    if (code === 88 || code === 120) {
      effects.enter('taskListCheckValueChecked');
      effects.consume(code);
      effects.exit('taskListCheckValueChecked');
      return close
    }

    return nok(code)
  }
  /** @type {State} */

  function close(code) {
    if (code === 93) {
      effects.enter('taskListCheckMarker');
      effects.consume(code);
      effects.exit('taskListCheckMarker');
      effects.exit('taskListCheck');
      return effects.check(
        {
          tokenize: spaceThenNonSpace
        },
        ok,
        nok
      )
    }

    return nok(code)
  }
}
/** @type {Tokenizer} */

function spaceThenNonSpace(effects, ok, nok) {
  const self = this;
  return factorySpace(effects, after, 'whitespace')
  /** @type {State} */

  function after(code) {
    const tail = self.events[self.events.length - 1];
    return (
      // We either found spaces…
      ((tail && tail[1].type === 'whitespace') || // …or it was followed by a line ending, in which case, there has to be
        // non-whitespace after that line ending, because otherwise we’d get an
        // EOF as the content is closed with blank lines.
        markdownLineEnding(code)) &&
        code !== null
        ? ok(code)
        : nok(code)
    )
  }
}

export { gfmTaskListItem, gfmTaskListItemHtml };
