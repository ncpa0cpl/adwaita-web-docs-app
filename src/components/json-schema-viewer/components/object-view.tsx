import type { JSONSchema4 } from "json-schema";
import React from "react";
import { PropertyNameLabel } from "./property-name-label";
import { SchemaView } from "./schema-view";

export type ObjectViewProps = {
  schema: JSONSchema4;
  name?: string;
  parent?: JSONSchema4;
};

export const ObjectView = ({ schema, name, parent }: ObjectViewProps) => {
  //   const isReq = isRequired(parent, name);

  if (!schema.properties) {
    return <></>;
  }

  return (
    <>
      {name && <PropertyNameLabel name={name} />}
      <td colSpan={2}>
        <table>
          <tbody>
            {Object.entries(schema.properties).map(
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
        </table>
      </td>
    </>
  );
};
