import type { JSONSchema4 } from "json-schema";
import React from "react";
import { AllOfView } from "./all-of-view";
import { AnyView } from "./any-view";
import { ArrayView } from "./array-view";
import { BooleanView } from "./boolean-view";
import { Description } from "./description";
import { FunctionView } from "./function-view";
import { NullView } from "./null-view";
import { NumberView } from "./number-view";
import { ObjectView } from "./object-view";
import { OneOfView } from "./one-of-view";
import { PropertyNameLabel } from "./property-name-label";
import { StringView } from "./string-view";
import { TypeNameLabel } from "./type-name-label";

export type SchemaViewProps = {
  schema: JSONSchema4;
  name?: string;
  parent?: JSONSchema4;
  isRoot?: boolean;
};

export const SchemaView = ({
  schema,
  name,
  parent,
  isRoot,
}: SchemaViewProps) => {
  if (schema.type && !Array.isArray(schema.type)) {
    switch (schema.type) {
      case "object":
        if (schema.title === "Function")
          return <FunctionView schema={schema} name={name} parent={parent} />;
        return (
          <ObjectView
            schema={schema}
            name={name}
            parent={parent}
            isRoot={isRoot}
          />
        );
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

  if (schema.oneOf) {
    return <OneOfView schema={schema} name={name} parent={parent} />;
  }

  if (schema.allOf) {
    return <AllOfView schema={schema} name={name} parent={parent} />;
  }

  if (schema.title) {
    return (
      <>
        {name && <PropertyNameLabel name={name} />}
        <td>
          <Description description={schema.description} />
        </td>
        <td>
          <TypeNameLabel name={schema.title} />
        </td>
      </>
    );
  }

  if (schema.metadata && schema.metadata.title) {
    return (
      <>
        {name && <PropertyNameLabel name={name} />}
        <td>
          <Description description={schema.metadata.description} />
        </td>
        <td>
          <TypeNameLabel name={schema.metadata.title} />
        </td>
      </>
    );
  }

  return <></>;
};
