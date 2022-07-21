import { Label } from "adwaita-web";
import type { JSONSchema4, JSONSchema4TypeName } from "json-schema";
import React from "react";
import { isRequired } from "../utils/is-required";
import { Description } from "./description";
import { PropertyNameLabel } from "./property-name-label";
import { SchemaView } from "./schema-view";
import { TypeNameLabel } from "./type-name-label";

export type ArrayViewProps = {
  schema: JSONSchema4;
  name?: string;
  parent?: JSONSchema4;
};

const containsComplexItemTypes = (schema: JSONSchema4) => {
  if (schema.items) {
    if (Array.isArray(schema.items)) {
      return schema.items.some(
        (item) =>
          item.type === "object" ||
          item.type === "array" ||
          item.allOf ||
          item.oneOf
      );
    }
    return (
      schema.items.type === "object" ||
      schema.items.type === "array" ||
      schema.items.allOf ||
      schema.items.oneOf
    );
  }
  return false;
};

const getNonComplexItemTypes = (schema: JSONSchema4): JSONSchema4TypeName[] => {
  if (schema.items) {
    if (Array.isArray(schema.items)) {
      return schema.items
        .map((item) => item.type)
        .filter(
          (type): type is JSONSchema4TypeName =>
            !!(type && type !== "object" && type !== "array")
        );
    }
    return [schema.items.type].filter(
      (type): type is JSONSchema4TypeName =>
        !!(type && type !== "object" && type !== "array")
    );
  }
  return [];
};

export const ArrayView = ({ schema, parent, name }: ArrayViewProps) => {
  const isReq = isRequired(parent, name);
  const isComplex = React.useMemo(
    () => containsComplexItemTypes(schema),
    [schema]
  );
  const nonComplexTypes = getNonComplexItemTypes(schema);
  return (
    <>
      {name && <PropertyNameLabel name={name} />}
      {isComplex ? (
        <>
          <td>
            <Description description={schema.description} />
          </td>
          <td>
            <table>
              <thead>
                <tr>
                  <th rowSpan={3}>
                    {parent && !isReq && (
                      <span>
                        <TypeNameLabel name="undefined" />|
                      </span>
                    )}
                    <Label className="complex-array-item-label">
                      {(schema.title ? `${schema.title} ` : "") + "Array<"}
                    </Label>
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(schema.items) ? (
                  <>
                    {schema.items.map((item, index) => (
                      <tr key={index}>
                        <SchemaView
                          name={`${index}`}
                          parent={schema}
                          schema={item}
                        />
                      </tr>
                    ))}
                  </>
                ) : (
                  <>
                    <tr>
                      <SchemaView schema={schema.items!} parent={schema} />
                    </tr>
                  </>
                )}
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan={3}>
                    <Label>{">"}</Label>
                  </th>
                </tr>
              </tfoot>
            </table>
          </td>
        </>
      ) : (
        <>
          <td>
            <Description description={schema.description} />
          </td>
          <td>
            {!isComplex && (
              <>
                <TypeNameLabel name={`Array<${nonComplexTypes.join(" ")}>`} />
                {!isReq && (
                  <>
                    |<TypeNameLabel name="undefined" />
                  </>
                )}
              </>
            )}
          </td>
        </>
      )}
    </>
  );
};
