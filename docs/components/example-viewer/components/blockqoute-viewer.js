import {Alert} from "../../../_snowpack/pkg/adwaita-web.v0.1.1-canary-83f07fb4b5a2324370770d2358c58f1bf3cb18f5.0.js";
import React from "../../../_snowpack/pkg/react.v18.2.0.js";
import {MarkdownElementViewer} from "./markdown-element-viewer.js";
export const BlockquoteViewer = (props) => {
  return /* @__PURE__ */ React.createElement(Alert, {
    showClose: false
  }, props.blockquote.elements.map((elem) => /* @__PURE__ */ React.createElement(MarkdownElementViewer, {
    key: elem.id,
    element: elem
  })));
};
