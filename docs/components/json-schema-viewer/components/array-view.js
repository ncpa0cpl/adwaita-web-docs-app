import {Label} from "../../../_snowpack/pkg/adwaita-web.v0.1.1-canary-83f07fb4b5a2324370770d2358c58f1bf3cb18f5.0.js";
import React from "../../../_snowpack/pkg/react.v18.2.0.js";
import {isRequired} from "../utils/is-required.js";
import {Description} from "./description.js";
import {PropertyNameLabel} from "./property-name-label.js";
import {SchemaView} from "./schema-view.js";
import {TypeNameLabel} from "./type-name-label.js";
const containsComplexItemTypes = (schema) => {
  if (schema.items) {
    if (Array.isArray(schema.items)) {
      return schema.items.some((item) => item.type === "object" || item.type === "array" || item.allOf || item.oneOf || !item.type && !item.title && item.metadata);
    }
    return schema.items.type === "object" || schema.items.type === "array" || schema.items.allOf || schema.items.oneOf || !schema.items.type && !schema.items.title && schema.items.metadata;
  }
  return false;
};
const getNonComplexItemTypes = (schema) => {
  if (schema.items) {
    if (Array.isArray(schema.items)) {
      return schema.items.map((item) => item.type).filter((type) => !!(type && type !== "object" && type !== "array"));
    }
    return [schema.items.type].filter((type) => !!(type && type !== "object" && type !== "array"));
  }
  return [];
};
export const ArrayView = ({schema, parent, name}) => {
  const isReq = isRequired(parent, name);
  const isComplex = React.useMemo(() => containsComplexItemTypes(schema), [schema]);
  const nonComplexTypes = getNonComplexItemTypes(schema);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, name && /* @__PURE__ */ React.createElement(PropertyNameLabel, {
    name
  }), isComplex ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(Description, {
    description: schema.description
  })), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("table", null, /* @__PURE__ */ React.createElement("colgroup", null, /* @__PURE__ */ React.createElement("col", {
    className: "description-column"
  }), /* @__PURE__ */ React.createElement("col", {
    className: "type-column"
  })), /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    rowSpan: 2
  }, parent && !isReq && /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement(TypeNameLabel, {
    name: "undefined"
  }), "|"), /* @__PURE__ */ React.createElement(Label, {
    className: "complex-array-item-label"
  }, (schema.title ? `${schema.title} ` : "") + "Array<")))), /* @__PURE__ */ React.createElement("tbody", null, Array.isArray(schema.items) ? /* @__PURE__ */ React.createElement(React.Fragment, null, schema.items.map((item, index) => /* @__PURE__ */ React.createElement("tr", {
    key: index
  }, /* @__PURE__ */ React.createElement(SchemaView, {
    schema: item
  })))) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement(SchemaView, {
    schema: schema.items
  })))), /* @__PURE__ */ React.createElement("tfoot", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    colSpan: 2
  }, /* @__PURE__ */ React.createElement(Label, null, ">"))))))) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(Description, {
    description: schema.description
  })), /* @__PURE__ */ React.createElement("td", null, !isComplex && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(TypeNameLabel, {
    name: `Array<${nonComplexTypes.join(" ")}>`
  }), !isReq && /* @__PURE__ */ React.createElement(React.Fragment, null, "|", /* @__PURE__ */ React.createElement(TypeNameLabel, {
    name: "undefined"
  }))))));
};
