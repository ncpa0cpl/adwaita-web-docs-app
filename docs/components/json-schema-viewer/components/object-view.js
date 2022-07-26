import {Label} from "../../../_snowpack/pkg/adwaita-web.v0.1.1-canary-83f07fb4b5a2324370770d2358c58f1bf3cb18f5.0.js";
import React from "../../../_snowpack/pkg/react.v18.2.0.js";
import {isRequired} from "../utils/is-required.js";
import {Description} from "./description.js";
import {PropertyNameLabel} from "./property-name-label.js";
import {SchemaView} from "./schema-view.js";
import {TypeNameLabel} from "./type-name-label.js";
export const ObjectView = ({
  schema,
  name,
  parent,
  isRoot
}) => {
  const isReq = isRequired(parent, name);
  const hasProperties = schema.properties && Object.keys(schema.properties).length > 0;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, name && /* @__PURE__ */ React.createElement(PropertyNameLabel, {
    name
  }), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(Description, {
    description: schema.description
  })), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("table", {
    className: "object-type-table"
  }, /* @__PURE__ */ React.createElement("colgroup", null, /* @__PURE__ */ React.createElement("col", {
    className: "property-name-column"
  }), /* @__PURE__ */ React.createElement("col", {
    className: "description-column"
  }), /* @__PURE__ */ React.createElement("col", {
    className: "type-column"
  })), /* @__PURE__ */ React.createElement("thead", null, !isRoot && /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    rowSpan: 3
  }, parent && !isReq && /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement(TypeNameLabel, {
    name: "undefined"
  }), "|"), /* @__PURE__ */ React.createElement(Label, {
    className: "complex-object-label"
  }, (schema.title ? `${schema.title} ` : "") + (hasProperties ? "Object {" : "Object {}"))))), hasProperties && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("tbody", null, Object.entries(schema.properties ?? {}).map(([propertyName, propertySchema]) => /* @__PURE__ */ React.createElement("tr", {
    key: propertyName
  }, /* @__PURE__ */ React.createElement(SchemaView, {
    name: propertyName,
    parent: schema,
    schema: propertySchema
  })))), /* @__PURE__ */ React.createElement("tfoot", null, !isRoot && /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    colSpan: 3
  }, /* @__PURE__ */ React.createElement(Label, null, "}"))))))));
};
