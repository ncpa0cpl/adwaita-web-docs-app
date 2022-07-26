import {Box} from "../../_snowpack/pkg/adwaita-web.v0.1.1-canary-83f07fb4b5a2324370770d2358c58f1bf3cb18f5.0.js";
import React from "../../_snowpack/pkg/react.v18.2.0.js";
import {CodeBlockViewer} from "./components/code-block-viewer.js";
import {MarkdownElementViewer} from "./components/markdown-element-viewer.js";
import "./styles.css.proxy.js";
export const ExampleViewer = (props) => {
  return /* @__PURE__ */ React.createElement(Box, {
    className: "component-example"
  }, /* @__PURE__ */ React.createElement("h1", null, props.example.label), /* @__PURE__ */ React.createElement(Box, {
    className: "example-description"
  }, props.example.description.map((elem) => /* @__PURE__ */ React.createElement(MarkdownElementViewer, {
    key: elem.id,
    element: elem
  }))), props.example.codeBlocks.map((codeBlock) => /* @__PURE__ */ React.createElement(CodeBlockViewer, {
    key: codeBlock.id,
    codeBlock
  })));
};
