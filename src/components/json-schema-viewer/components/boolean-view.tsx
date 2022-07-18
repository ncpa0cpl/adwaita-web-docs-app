import type { JSONSchema4 } from "json-schema";
import React from "react";
import { isRequired } from "../utils/is-required";
import { Description } from "./description";
import { PropertyNameLabel } from "./property-name-label";
import { TypeNameLabel } from "./type-name-label";

export type BooleanViewProps = {
  schema: JSONSchema4;
  name?: string;
  parent?: JSONSchema4;
};

export const BooleanView = ({ schema, parent, name }: BooleanViewProps) => {
  const isReq = isRequired(parent, name);
  return (
    <>
      {name && <PropertyNameLabel name={name} />}
      <td>
        <TypeNameLabel name="number" />
        {!isReq && (
          <>
            |<TypeNameLabel name="undefined" />
          </>
        )}
      </td>
      <td>
        <Description description={schema.description} />
      </td>
    </>
  );
};
