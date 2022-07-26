import { factorySpace } from '/_snowpack/pkg/micromark-factory-space.v1.0.0.js';
import { markdownLineEnding, markdownSpace } from '/_snowpack/pkg/micromark-util-character.v1.1.0.js';

/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 */

/**
 * @param {Effects} effects
 * @param {State} ok
 */
function factoryWhitespace(effects, ok) {
  /** @type {boolean} */
  let seen;
  return start
  /** @type {State} */

  function start(code) {
    if (markdownLineEnding(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      seen = true;
      return start
    }

    if (markdownSpace(code)) {
      return factorySpace(
        effects,
        start,
        seen ? 'linePrefix' : 'lineSuffix'
      )(code)
    }

    return ok(code)
  }
}

export { factoryWhitespace };
