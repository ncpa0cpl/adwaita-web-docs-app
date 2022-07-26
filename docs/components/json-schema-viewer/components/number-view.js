import React from "../../../_snowpack/pkg/react.v18.2.0.js";
import {isRequired} from "../utils/is-required.js";
import {parseSimpleUnion} from "../utils/parse-simple-union.js";
import {Description} from "./description.js";
import {PropertyNameLabel} from "./property-name-label.js";
import {TypeNameLabel} from "./type-name-label.js";
export const NumberView = ({schema, parent, name}) => {
  const isReq = isRequired(parent, name);
  let typeLabel = "number";
  if (schema.enum) {
    typeLabel = parseSimpleUnion(schema);
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, name && /* @__PURE__ */ React.createElement(PropertyNameLabel, {
    name
  }), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(Description, {
    description: schema.description
  })), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(TypeNameLabel, {
    name: typeLabel
  }), !isReq && /* @__PURE__ */ React.createElement(React.Fragment, null, "|", /* @__PURE__ */ React.createElement(TypeNameLabel, {
    name: "undefined"
  }))));
};
