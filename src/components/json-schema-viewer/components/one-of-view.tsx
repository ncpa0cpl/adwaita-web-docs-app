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

export type OneOfViewProps = {
  schema: JSONSchema4;
  name?: string;
  parent?: JSONSchema4;
};

const isComplexUnion = (schema: JSONSchema4) => {
  return (
    schema.oneOf &&
    schema.oneOf.length > 1 &&
    schema.oneOf.some(
      (s) =>
        s.type === "object" ||
        s.type === "array" ||
        Array.isArray(s.type) ||
        s.oneOf ||
        s.allOf
    )
  );
};

export const OneOfView = ({ schema, name, parent }: OneOfViewProps) => {
  const isReq = isRequired(parent, name);

  if (!isComplexUnion(schema)) {
    return (
      <>
        {name && <PropertyNameLabel name={name} />}
        <td>
          <Description description={schema.description} />
        </td>
        <td>
          {schema.oneOf!.map((unionMember, i) => {
            let typeLabel = (unionMember.type ??
              unionMember.title)! as React.ReactNode;

            if (unionMember.enum) {
              typeLabel = parseSimpleUnion(unionMember);
            }

            return (
              <KeyedFragment key={i}>
                <TypeNameLabel name={typeLabel} />
                {i === schema.oneOf!.length - 1 ? "" : "|"}
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
        <Label>One of:</Label>
        <table>
          <colgroup>
            <col className="description-column" />
            <col className="type-column" />
          </colgroup>
          <tbody>
            {!isReq && (
              <tr>
                <td></td>
                <td>
                  <TypeNameLabel name="undefined" />
                </td>
              </tr>
            )}
            {schema.oneOf!.map((unionMember, i) => (
              <tr key={i}>
                <SchemaView schema={unionMember} />
              </tr>
            ))}
          </tbody>
        </table>
      </td>
    </>
  );
};
