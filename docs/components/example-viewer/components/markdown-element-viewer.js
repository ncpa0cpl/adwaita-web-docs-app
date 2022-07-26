import React from "../../../_snowpack/pkg/react.v18.2.0.js";
import {BlockquoteViewer} from "./blockqoute-viewer.js";
import {ListViewer} from "./list-viewer.js";
import {TextGroupViewer} from "./text-group-viewer.js";
import {TextViewer} from "./text-viewer.js";
export const MarkdownElementViewer = ({
  element
}) => {
  if (element.type === "list") {
    return /* @__PURE__ */ React.createElement(ListViewer, {
      list: element
    });
  }
  if (element.type === "blockquote") {
    return /* @__PURE__ */ React.createElement(BlockquoteViewer, {
      blockquote: element
    });
  }
  if (element.type === "text") {
    return /* @__PURE__ */ React.createElement(TextViewer, {
      text: element
    });
  }
  return /* @__PURE__ */ React.createElement(TextGroupViewer, {
    textGroup: element
  });
};
