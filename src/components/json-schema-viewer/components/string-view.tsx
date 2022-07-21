import type { JSONSchema4 } from "json-schema";
import React from "react";
import { isRequired } from "../utils/is-required";
import { parseSimpleUnion } from "../utils/parse-simple-union";
import { Description } from "./description";
import { PropertyNameLabel } from "./property-name-label";
import { TypeNameLabel } from "./type-name-label";

export type StringViewProps = {
  schema: JSONSchema4;
  name?: string;
  parent?: JSONSchema4;
};

export const StringView = ({ schema, name, parent }: StringViewProps) => {
  const isReq = isRequired(parent, name);

  let typeLabel: React.ReactNode = "string";

  if (schema.enum) {
    typeLabel = parseSimpleUnion(schema);
  }

  return (
    <>
      {name && <PropertyNameLabel name={name} />}
      <td>
        <Description description={schema.description} />
      </td>
      <td>
        <TypeNameLabel name={typeLabel} />
        {!isReq && (
          <>
            |<TypeNameLabel name="undefined" />
          </>
        )}
      </td>
    </>
  );
};
