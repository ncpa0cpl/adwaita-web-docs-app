import { combineExtensions, combineHtmlExtensions } from '/_snowpack/pkg/micromark-util-combine-extensions.v1.0.0.js';
import { gfmAutolinkLiteral, gfmAutolinkLiteralHtml } from '/_snowpack/pkg/micromark-extension-gfm-autolink-literal.v1.0.3.js';
import { gfmFootnote, gfmFootnoteHtml } from '/_snowpack/pkg/micromark-extension-gfm-footnote.v1.0.4.js';
import { gfmStrikethrough, gfmStrikethroughHtml } from '/_snowpack/pkg/micromark-extension-gfm-strikethrough.v1.0.4.js';
import { gfmTable, gfmTableHtml } from '/_snowpack/pkg/micromark-extension-gfm-table.v1.0.5.js';
import { gfmTagfilterHtml } from '/_snowpack/pkg/micromark-extension-gfm-tagfilter.v1.0.1.js';
import { gfmTaskListItem, gfmTaskListItemHtml } from '/_snowpack/pkg/micromark-extension-gfm-task-list-item.v1.0.3.js';

/**
 * @typedef {import('micromark-util-types').Extension} Extension
 * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
 * @typedef {import('micromark-extension-gfm-strikethrough').Options} Options
 * @typedef {import('micromark-extension-gfm-footnote').HtmlOptions} HtmlOptions
 */

/**
 * Support GFM or markdown on github.com.
 *
 * @param {Options} [options]
 * @returns {Extension}
 */
function gfm(options) {
  return combineExtensions([
    gfmAutolinkLiteral,
    gfmFootnote(),
    gfmStrikethrough(options),
    gfmTable,
    gfmTaskListItem
  ])
}

/**
 * Support to compile GFM to HTML.
 *
 * @param {HtmlOptions} [options]
 * @returns {HtmlExtension}
 */
function gfmHtml(options) {
  return combineHtmlExtensions([
    gfmAutolinkLiteralHtml,
    gfmFootnoteHtml(options),
    gfmStrikethroughHtml,
    gfmTableHtml,
    gfmTagfilterHtml,
    gfmTaskListItemHtml
  ])
}

export { gfm, gfmHtml };
