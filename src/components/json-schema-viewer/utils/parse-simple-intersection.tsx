import type { JSONSchema4 } from "json-schema";
import React from "react";

export const parseSimpleIntersection = (
  schema: JSONSchema4
): React.ReactNode => {
  return (
    schema
      .enum!.filter((e) => e)
      // eslint-disable-next-line @typescript-eslint/no-base-to-string
      .flatMap((e, index) => {
        let node: React.ReactNode;

        if (typeof e === "number") {
          node = <span className="number-type-literal">{e.toString()}</span>;
        } else if (typeof e === "boolean") {
          node = <span className="boolean-type-literal">{e.toString()}</span>;
        } else {
          // eslint-disable-next-line @typescript-eslint/no-base-to-string
          node = <span className="string-type-literal">"{e!.toString()}"</span>;
        }

        if (index === schema.enum!.length - 1) return node;
        return [node, <span>{" & "}</span>];
      })
  );
};
