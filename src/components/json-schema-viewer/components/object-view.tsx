import { Label } from "adwaita-web";
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
    schema.properties && Object.keys(schema.properties).length > 0;

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
                {Object.entries(schema.properties ?? {}).map(
                  ([propertyName, propertySchema]) => (
                    <tr key={propertyName}>
                      <SchemaView
                        name={propertyName}
                        parent={schema}
                        schema={propertySchema}
                      />
                    </tr>
                  )
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
