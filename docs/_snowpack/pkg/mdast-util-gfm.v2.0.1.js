import { gfmAutolinkLiteralFromMarkdown, gfmAutolinkLiteralToMarkdown } from '/_snowpack/pkg/mdast-util-gfm-autolink-literal.v1.0.2.js';
import { gfmFootnoteFromMarkdown, gfmFootnoteToMarkdown } from '/_snowpack/pkg/mdast-util-gfm-footnote.v1.0.1.js';
import { gfmStrikethroughFromMarkdown, gfmStrikethroughToMarkdown } from '/_snowpack/pkg/mdast-util-gfm-strikethrough.v1.0.1.js';
import { gfmTableFromMarkdown, gfmTableToMarkdown } from '/_snowpack/pkg/mdast-util-gfm-table.v1.0.4.js';
import { gfmTaskListItemFromMarkdown, gfmTaskListItemToMarkdown } from '/_snowpack/pkg/mdast-util-gfm-task-list-item.v1.0.1.js';

/**
 * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension
 * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension
 *
 * @typedef {import('mdast-util-gfm-table').Options} Options
 */

/**
 * @returns {Array<FromMarkdownExtension>}
 */
function gfmFromMarkdown() {
  return [
    gfmAutolinkLiteralFromMarkdown,
    gfmFootnoteFromMarkdown(),
    gfmStrikethroughFromMarkdown,
    gfmTableFromMarkdown,
    gfmTaskListItemFromMarkdown
  ]
}

/**
 * @param {Options} [options]
 * @returns {ToMarkdownExtension}
 */
function gfmToMarkdown(options) {
  return {
    extensions: [
      gfmAutolinkLiteralToMarkdown,
      gfmFootnoteToMarkdown(),
      gfmStrikethroughToMarkdown,
      gfmTableToMarkdown(options),
      gfmTaskListItemToMarkdown
    ]
  }
}

export { gfmFromMarkdown, gfmToMarkdown };
