import React from "../../../_snowpack/pkg/react.v18.2.0.js";
export const parseSimpleIntersection = (schema) => {
  return schema.enum.filter((e) => e).flatMap((e, index) => {
    let node;
    if (typeof e === "number") {
      node = /* @__PURE__ */ React.createElement("span", {
        className: "number-type-literal"
      }, e.toString());
    } else if (typeof e === "boolean") {
      node = /* @__PURE__ */ React.createElement("span", {
        className: "boolean-type-literal"
      }, e.toString());
    } else {
      node = /* @__PURE__ */ React.createElement("span", {
        className: "string-type-literal"
      }, '"', e.toString(), '"');
    }
    if (index === schema.enum.length - 1)
      return node;
    return [node, /* @__PURE__ */ React.createElement("span", null, " & ")];
  });
};
