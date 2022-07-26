import {Box, Button} from "../../_snowpack/pkg/adwaita-web.v0.1.1-canary-83f07fb4b5a2324370770d2358c58f1bf3cb18f5.0.js";
import React from "../../_snowpack/pkg/react.v18.2.0.js";
import JsonViewer from "../../_snowpack/pkg/react-json-view.v1.21.3.js";
import {SchemaView} from "./components/schema-view.js";
import "./styles.css.proxy.js";
export const JsonSchemaViewer = ({schema}) => {
  const [showRaw, setShowRaw] = React.useState(false);
  return /* @__PURE__ */ React.createElement(Box, {
    className: "json-schema-viewer"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "button-group linked"
  }, /* @__PURE__ */ React.createElement(Button, {
    size: "medium",
    active: !showRaw,
    onClick: () => setShowRaw(false)
  }, "View"), /* @__PURE__ */ React.createElement(Button, {
    size: "medium",
    active: showRaw,
    onClick: () => setShowRaw(true)
  }, "Raw")), showRaw ? /* @__PURE__ */ React.createElement(Box, {
    padded: true,
    border: true,
    className: "raw-view background-medium"
  }, /* @__PURE__ */ React.createElement(JsonViewer, {
    displayDataTypes: false,
    src: schema
  })) : /* @__PURE__ */ React.createElement(Box, {
    padded: true,
    border: true,
    className: "schema-viewer-container background-medium"
  }, /* @__PURE__ */ React.createElement("table", null, /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement(SchemaView, {
    schema,
    isRoot: true
  }))))));
};
