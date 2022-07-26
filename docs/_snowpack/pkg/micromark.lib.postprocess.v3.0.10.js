import { subtokenize } from '/_snowpack/pkg/micromark-util-subtokenize.v1.0.2.js';

/**
 * @typedef {import('micromark-util-types').Event} Event
 */
/**
 * @param {Event[]} events
 * @returns {Event[]}
 */

function postprocess(events) {
  while (!subtokenize(events)) {
    // Empty
  }

  return events
}

export { postprocess };
