import { Label } from "adwaita-web";
import type { JSONSchema4 } from "json-schema";
import React from "react";
import { isRequired } from "../utils/is-required";
import { parseSimpleUnion } from "../utils/parse-simple-union";
import { Description } from "./description";
import { KeyedFragment } from "./keyed-fragment";
import { PropertyNameLabel } from "./property-name-label";
import { SchemaView } from "./schema-view";
import { TypeNameLabel } from "./type-name-label";

export type AllOfViewProps = {
  schema: JSONSchema4;
  name?: string;
  parent?: JSONSchema4;
};

const isComplexIntersection = (schema: JSONSchema4) => {
  return (
    schema.allOf &&
    schema.allOf.length > 1 &&
    schema.allOf.some(
      (s) =>
        s.type === "object" ||
        s.type === "array" ||
        Array.isArray(s.type) ||
        s.oneOf ||
        s.allOf
    )
  );
};

export const AllOfView = ({ schema, name, parent }: AllOfViewProps) => {
  const isReq = isRequired(parent, name);

  if (!isComplexIntersection(schema)) {
    return (
      <>
        {name && <PropertyNameLabel name={name} />}
        <td>
          <Description description={schema.description} />
        </td>
        <td>
          {schema.allOf!.map((unionMember, i) => {
            let typeLabel = (unionMember.type ??
              unionMember.title)! as React.ReactNode;

            if (unionMember.enum) {
              typeLabel = parseSimpleUnion(unionMember);
            }

            return (
              <KeyedFragment key={i}>
                <TypeNameLabel name={typeLabel} />
                {i === schema.allOf!.length - 1 ? "" : "&"}
              </KeyedFragment>
            );
          })}
          {!isReq && (
            <>
              |<TypeNameLabel name="undefined" />
            </>
          )}
        </td>
      </>
    );
  }

  return (
    <>
      {name && <PropertyNameLabel name={name} />}
      <td>
        <Description description={schema.description} />
      </td>
      <td>
        <Label>All of:</Label>
        <table>
          <tbody>
            {schema.allOf!.map((unionMember, i) => (
              <tr key={i}>
                <SchemaView schema={unionMember} parent={schema} />
              </tr>
            ))}
          </tbody>
        </table>
      </td>
    </>
  );
};
