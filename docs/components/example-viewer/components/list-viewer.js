import {List as AWList, ListItem} from "../../../_snowpack/pkg/adwaita-web.v0.1.1-canary-83f07fb4b5a2324370770d2358c58f1bf3cb18f5.0.js";
import React from "../../../_snowpack/pkg/react.v18.2.0.js";
import {MarkdownElementViewer} from "./markdown-element-viewer.js";
export const ListViewer = (props) => {
  return /* @__PURE__ */ React.createElement(AWList, null, props.list.elements.map((element) => /* @__PURE__ */ React.createElement(ListItem, {
    key: element.id
  }, element.elementType === "text" ? element.text.map((t) => /* @__PURE__ */ React.createElement(MarkdownElementViewer, {
    key: t.id,
    element: t
  })) : /* @__PURE__ */ React.createElement(ListViewer, {
    list: element.nestedList
  }))));
};
