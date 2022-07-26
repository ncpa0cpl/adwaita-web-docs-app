import React from "../../../_snowpack/pkg/react.v18.2.0.js";
import {AllOfView} from "./all-of-view.js";
import {AnyView} from "./any-view.js";
import {ArrayView} from "./array-view.js";
import {BooleanView} from "./boolean-view.js";
import {Description} from "./description.js";
import {FunctionView} from "./function-view.js";
import {NullView} from "./null-view.js";
import {NumberView} from "./number-view.js";
import {ObjectView} from "./object-view.js";
import {OneOfView} from "./one-of-view.js";
import {PropertyNameLabel} from "./property-name-label.js";
import {StringView} from "./string-view.js";
import {TypeNameLabel} from "./type-name-label.js";
export const SchemaView = ({
  schema,
  name,
  parent,
  isRoot
}) => {
  if (schema.type && !Array.isArray(schema.type)) {
    switch (schema.type) {
      case "object":
        if (schema.title === "Function")
          return /* @__PURE__ */ React.createElement(FunctionView, {
            schema,
            name,
            parent
          });
        return /* @__PURE__ */ React.createElement(ObjectView, {
          schema,
          name,
          parent,
          isRoot
        });
      case "array":
        return /* @__PURE__ */ React.createElement(ArrayView, {
          schema,
          name,
          parent
        });
      case "string":
        return /* @__PURE__ */ React.createElement(StringView, {
          schema,
          name,
          parent
        });
      case "number":
      case "integer":
        return /* @__PURE__ */ React.createElement(NumberView, {
          schema,
          name,
          parent
        });
      case "boolean":
        return /* @__PURE__ */ React.createElement(BooleanView, {
          schema,
          name,
          parent
        });
      case "null":
        return /* @__PURE__ */ React.createElement(NullView, {
          schema,
          name,
          parent
        });
      case "any":
        return /* @__PURE__ */ React.createElement(AnyView, {
          schema,
          name,
          parent
        });
    }
  }
  if (schema.oneOf) {
    return /* @__PURE__ */ React.createElement(OneOfView, {
      schema,
      name,
      parent
    });
  }
  if (schema.allOf) {
    return /* @__PURE__ */ React.createElement(AllOfView, {
      schema,
      name,
      parent
    });
  }
  if (schema.title) {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, name && /* @__PURE__ */ React.createElement(PropertyNameLabel, {
      name
    }), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(Description, {
      description: schema.description
    })), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(TypeNameLabel, {
      name: schema.title
    })));
  }
  if (schema.metadata && schema.metadata.title) {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, name && /* @__PURE__ */ React.createElement(PropertyNameLabel, {
      name
    }), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(Description, {
      description: schema.metadata.description
    })), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(TypeNameLabel, {
      name: schema.metadata.title
    })));
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null);
};
