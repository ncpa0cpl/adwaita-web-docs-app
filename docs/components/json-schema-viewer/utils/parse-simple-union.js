import React from "../../../_snowpack/pkg/react.v18.2.0.js";
export const parseSimpleUnion = (schema) => {
  return schema.enum.filter((e) => e).flatMap((e, index) => {
    let node;
    if (typeof e === "number") {
      node = /* @__PURE__ */ React.createElement("span", {
        key: `${index}-1`,
        className: "number-type-literal"
      }, e.toString());
    } else if (typeof e === "boolean") {
      node = /* @__PURE__ */ React.createElement("span", {
        key: `${index}-1`,
        className: "boolean-type-literal"
      }, e.toString());
    } else if (typeof e === "string") {
      node = /* @__PURE__ */ React.createElement("span", {
        key: `${index}-1`,
        className: "string-type-literal"
      }, '"', e.toString(), '"');
    } else if (typeof e === "object" && e !== null && !Array.isArray(e) && e.title) {
      node = /* @__PURE__ */ React.createElement("span", {
        key: `${index}-1`,
        className: "type-title"
      }, e.title.toString());
    } else {
      node = /* @__PURE__ */ React.createElement("span", {
        key: `${index}-1`,
        className: "string-type-literal"
      }, '"', e.toString(), '"');
    }
    if (index === schema.enum.length - 1)
      return node;
    return [node, /* @__PURE__ */ React.createElement("span", {
      key: `${index}-2`
    }, " | ")];
  });
};
