import type { JSONSchema4 } from "json-schema";
import React from "react";
import { AnyView } from "./any-view";
import { ArrayView } from "./array-view";
import { BooleanView } from "./boolean-view";
import { FunctionView } from "./function-view";
import { NullView } from "./null-view";
import { NumberView } from "./number-view";
import { ObjectView } from "./object-view";
import { StringView } from "./string-view";

export type SchemaViewProps = {
  schema: JSONSchema4;
  name?: string;
  parent?: JSONSchema4;
};

export const SchemaView = ({ schema, name, parent }: SchemaViewProps) => {
  if (schema.type && !Array.isArray(schema.type)) {
    switch (schema.type) {
      case "object":
        if (schema.title === "Function")
          return <FunctionView schema={schema} name={name} parent={parent} />;
        return <ObjectView schema={schema} name={name} parent={parent} />;
      case "array":
        return <ArrayView schema={schema} name={name} parent={parent} />;
      case "string":
        return <StringView schema={schema} name={name} parent={parent} />;
      case "number":
      case "integer":
        return <NumberView schema={schema} name={name} parent={parent} />;
      case "boolean":
        return <BooleanView schema={schema} name={name} parent={parent} />;
      case "null":
        return <NullView schema={schema} name={name} parent={parent} />;
      case "any":
        return <AnyView schema={schema} name={name} parent={parent} />;
    }
  }

  return <></>;
};
