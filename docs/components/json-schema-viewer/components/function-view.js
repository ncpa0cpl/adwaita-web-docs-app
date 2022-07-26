import {Box, Popover} from "../../../_snowpack/pkg/adwaita-web.v0.1.1-canary-83f07fb4b5a2324370770d2358c58f1bf3cb18f5.0.js";
import React from "../../../_snowpack/pkg/react.v18.2.0.js";
import {sortAlphanumeric} from "../../../helpers/sort-alphanum.js";
import {isRequired} from "../utils/is-required.js";
import {Description} from "./description.js";
import {PropertyNameLabel} from "./property-name-label.js";
import {SchemaView} from "./schema-view.js";
import {TypeNameLabel} from "./type-name-label.js";
export const FunctionView = ({schema, parent, name}) => {
  const isReq = isRequired(parent, name);
  const funcArgs = sortAlphanumeric(Object.entries(schema?.properties?.arguments?.properties ?? {}), ([key, _]) => key);
  const returns = schema.properties?.returns;
  const renderArguments = (args) => {
    const returns2 = [];
    for (const index of args.keys()) {
      const [argName, argSchema] = args[index];
      const isLast = index === args.length - 1;
      returns2.push(/* @__PURE__ */ React.createElement("span", {
        key: `arg-name-${index}`
      }, `${argName.match(/[^0-9]+/) ? argName : `arg_${argName}`}: `));
      if (typeof argSchema.type === "string" && [
        "string",
        "number",
        "integer",
        "boolean",
        "null",
        "any",
        "void"
      ].includes(argSchema.type)) {
        returns2.push(/* @__PURE__ */ React.createElement("span", {
          key: `arg-type-${index}`
        }, argSchema.type));
      } else {
        returns2.push(/* @__PURE__ */ React.createElement(Popover, {
          key: `arg-popover-${index}`,
          content: /* @__PURE__ */ React.createElement(Box, {
            className: "json-schema-viewer schema-viewer-container"
          }, /* @__PURE__ */ React.createElement("table", null, /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement(SchemaView, {
            schema: argSchema
          })))))
        }, /* @__PURE__ */ React.createElement("span", {
          className: "popover-type-ref"
        }, argSchema.title)));
      }
      if (!isLast) {
        returns2.push(/* @__PURE__ */ React.createElement("span", {
          key: `separator-${index}`
        }, ", "));
      }
    }
    return returns2;
  };
  const renderReturnType = (ret) => {
    if (!ret)
      return "void";
    if (typeof ret.type === "string" && [
      "string",
      "number",
      "integer",
      "boolean",
      "null",
      "any",
      "void"
    ].includes(ret.type)) {
      return ret.type;
    }
    return /* @__PURE__ */ React.createElement(Popover, {
      content: /* @__PURE__ */ React.createElement(Box, {
        className: "json-schema-viewer schema-viewer-container"
      }, /* @__PURE__ */ React.createElement("table", null, /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement(SchemaView, {
        schema: ret
      })))))
    }, /* @__PURE__ */ React.createElement("span", {
      className: "popover-type-ref"
    }, ret.title));
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, name && /* @__PURE__ */ React.createElement(PropertyNameLabel, {
    name
  }), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(Description, {
    description: schema.description
  })), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("span", {
    className: "function-type"
  }, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", null, "("), /* @__PURE__ */ React.createElement(React.Fragment, null, renderArguments(funcArgs)), /* @__PURE__ */ React.createElement("span", null, ")"), /* @__PURE__ */ React.createElement("span", null, " => "), /* @__PURE__ */ React.createElement("span", null, renderReturnType(returns)))), !isReq && /* @__PURE__ */ React.createElement(React.Fragment, null, "|", /* @__PURE__ */ React.createElement(TypeNameLabel, {
    name: "undefined"
  }))));
};
