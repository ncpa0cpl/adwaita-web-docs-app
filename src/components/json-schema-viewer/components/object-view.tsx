import { Box, Label } from "adwaita-web";
import type { JSONSchema4 } from "json-schema";
import React from "react";
import { isRequired } from "../utils/is-required";
import { Description } from "./description";
import { PropertyNameLabel } from "./property-name-label";
import { SchemaView } from "./schema-view";
import { TypeNameLabel } from "./type-name-label";

export type ObjectViewProps = {
  schema: JSONSchema4;
  name?: string;
  parent?: JSONSchema4;
  isRoot?: boolean;
};

export const ObjectView = ({
  schema,
  name,
  parent,
  isRoot,
}: ObjectViewProps) => {
  const isReq = isRequired(parent, name);

  const hasProperties =
    (schema.properties && Object.keys(schema.properties).length > 0) ||
    typeof schema.additionalProperties === "object";

  return (
    <>
      {name && <PropertyNameLabel name={name} />}
      <td>
        <Description description={schema.description} />
      </td>
      <td>
        <table className="object-type-table">
          <colgroup>
            <col className="property-name-column" />
            <col className="description-column" />
            <col className="type-column" />
          </colgroup>
          <thead>
            {!isRoot && (
              <tr>
                <th rowSpan={3}>
                  {parent && !isReq && (
                    <span>
                      <TypeNameLabel name="undefined" />|
                    </span>
                  )}
                  <Label className="complex-object-label">
                    {(schema.title ? `${schema.title} ` : "") +
                      (hasProperties ? "Object {" : "Object {}")}
                  </Label>
                </th>
              </tr>
            )}
          </thead>
          {hasProperties && (
            <>
              <tbody>
                {schema.properties &&
                Object.keys(schema.properties).length > 0 ? (
                  Object.entries(schema.properties).map(
                    ([propertyName, propertySchema]) => (
                      <tr key={propertyName}>
                        <SchemaView
                          name={propertyName}
                          parent={schema}
                          schema={propertySchema}
                        />
                      </tr>
                    )
                  )
                ) : (
                  <tr>
                    <td>
                      {schema.propertyNames ? (
                        <Box horizontal align className="index-signature">
                          <p className="before-after-symbol">{"["}</p>
                          <table className="no-paddings no-margins no-borders">
                            <tbody>
                              <tr>
                                <SchemaView
                                  parent={schema}
                                  schema={schema.propertyNames}
                                />
                              </tr>
                            </tbody>
                          </table>
                          <p className="before-after-symbol">{"]"}</p>
                        </Box>
                      ) : (
                        <PropertyNameLabel
                          indexSignature
                          name="[string | number | symbol]"
                        />
                      )}
                    </td>
                    <td>
                      <Description description={schema.description} />
                    </td>
                    <td>
                      {schema.additionalProperties &&
                        typeof schema.additionalProperties === "object" && (
                          <table className="no-paddings no-margins no-borders">
                            <tbody>
                              <tr>
                                <SchemaView
                                  parent={schema}
                                  schema={schema.additionalProperties}
                                />
                              </tr>
                            </tbody>
                          </table>
                        )}
                    </td>
                  </tr>
                )}
              </tbody>
              <tfoot>
                {!isRoot && (
                  <tr>
                    <th colSpan={3}>
                      <Label>{"}"}</Label>
                    </th>
                  </tr>
                )}
              </tfoot>
            </>
          )}
        </table>
      </td>
    </>
  );
};
