import {Label} from "../../../_snowpack/pkg/adwaita-web.v0.1.1-canary-83f07fb4b5a2324370770d2358c58f1bf3cb18f5.0.js";
import React from "../../../_snowpack/pkg/react.v18.2.0.js";
import {isRequired} from "../utils/is-required.js";
import {parseSimpleUnion} from "../utils/parse-simple-union.js";
import {Description} from "./description.js";
import {KeyedFragment} from "./keyed-fragment.js";
import {PropertyNameLabel} from "./property-name-label.js";
import {SchemaView} from "./schema-view.js";
import {TypeNameLabel} from "./type-name-label.js";
const isComplexIntersection = (schema) => {
  return schema.allOf && schema.allOf.length > 1 && schema.allOf.some((s) => s.type === "object" || s.type === "array" || Array.isArray(s.type) || s.oneOf || s.allOf);
};
export const AllOfView = ({schema, name, parent}) => {
  const isReq = isRequired(parent, name);
  if (!isComplexIntersection(schema)) {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, name && /* @__PURE__ */ React.createElement(PropertyNameLabel, {
      name
    }), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(Description, {
      description: schema.description
    })), /* @__PURE__ */ React.createElement("td", null, schema.allOf.map((unionMember, i) => {
      let typeLabel = unionMember.type ?? unionMember.title;
      if (unionMember.enum) {
        typeLabel = parseSimpleUnion(unionMember);
      }
      return /* @__PURE__ */ React.createElement(KeyedFragment, {
        key: i
      }, /* @__PURE__ */ React.createElement(TypeNameLabel, {
        name: typeLabel
      }), i === schema.allOf.length - 1 ? "" : "&");
    }), !isReq && /* @__PURE__ */ React.createElement(React.Fragment, null, "|", /* @__PURE__ */ React.createElement(TypeNameLabel, {
      name: "undefined"
    }))));
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, name && /* @__PURE__ */ React.createElement(PropertyNameLabel, {
    name
  }), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(Description, {
    description: schema.description
  })), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(Label, null, "All of:"), /* @__PURE__ */ React.createElement("table", null, /* @__PURE__ */ React.createElement("colgroup", null, /* @__PURE__ */ React.createElement("col", {
    className: "description-column"
  }), /* @__PURE__ */ React.createElement("col", {
    className: "type-column"
  })), /* @__PURE__ */ React.createElement("tbody", null, schema.allOf.map((unionMember, i) => /* @__PURE__ */ React.createElement("tr", {
    key: i
  }, /* @__PURE__ */ React.createElement(SchemaView, {
    schema: unionMember,
    parent: schema
  })))))));
};
