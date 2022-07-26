import React from "../../../_snowpack/pkg/react.v18.2.0.js";
import {TextViewer} from "./text-viewer.js";
export const TextGroupViewer = (props) => {
  return /* @__PURE__ */ React.createElement("span", {
    className: "text-group"
  }, props.textGroup.texts.map((text) => {
    return /* @__PURE__ */ React.createElement(TextViewer, {
      key: text.id,
      text,
      isPartOfGroup: true
    });
  }));
};
