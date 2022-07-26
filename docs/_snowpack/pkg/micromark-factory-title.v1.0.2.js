import { factorySpace } from '/_snowpack/pkg/micromark-factory-space.v1.0.0.js';
import { markdownLineEnding } from '/_snowpack/pkg/micromark-util-character.v1.1.0.js';

/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */

/**
 * @param {Effects} effects
 * @param {State} ok
 * @param {State} nok
 * @param {string} type
 * @param {string} markerType
 * @param {string} stringType
 * @returns {State}
 */
// eslint-disable-next-line max-params
function factoryTitle(effects, ok, nok, type, markerType, stringType) {
  /** @type {NonNullable<Code>} */
  let marker;
  return start
  /** @type {State} */

  function start(code) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    marker = code === 40 ? 41 : code;
    return atFirstTitleBreak
  }
  /** @type {State} */

  function atFirstTitleBreak(code) {
    if (code === marker) {
      effects.enter(markerType);
      effects.consume(code);
      effects.exit(markerType);
      effects.exit(type);
      return ok
    }

    effects.enter(stringType);
    return atTitleBreak(code)
  }
  /** @type {State} */

  function atTitleBreak(code) {
    if (code === marker) {
      effects.exit(stringType);
      return atFirstTitleBreak(marker)
    }

    if (code === null) {
      return nok(code)
    } // Note: blank lines can’t exist in content.

    if (markdownLineEnding(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return factorySpace(effects, atTitleBreak, 'linePrefix')
    }

    effects.enter('chunkString', {
      contentType: 'string'
    });
    return title(code)
  }
  /** @type {State} */

  function title(code) {
    if (code === marker || code === null || markdownLineEnding(code)) {
      effects.exit('chunkString');
      return atTitleBreak(code)
    }

    effects.consume(code);
    return code === 92 ? titleEscape : title
  }
  /** @type {State} */

  function titleEscape(code) {
    if (code === marker || code === 92) {
      effects.consume(code);
      return title
    }

    return title(code)
  }
}

export { factoryTitle };
