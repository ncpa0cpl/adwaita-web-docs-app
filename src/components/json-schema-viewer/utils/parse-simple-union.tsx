import type { JSONSchema4 } from "json-schema";
import React from "react";

export const parseSimpleUnion = (schema: JSONSchema4): React.ReactNode => {
  return (
    schema
      .enum!.filter((e) => e)
      // eslint-disable-next-line @typescript-eslint/no-base-to-string
      .flatMap((e, index) => {
        let node: React.ReactNode;

        if (typeof e === "number") {
          node = (
            <span key={`${index}-1`} className="number-type-literal">
              {e.toString()}
            </span>
          );
        } else if (typeof e === "boolean") {
          node = (
            <span key={`${index}-1`} className="boolean-type-literal">
              {e.toString()}
            </span>
          );
        } else if (typeof e === "string") {
          node = (
            <span key={`${index}-1`} className="string-type-literal">
              "
              {
                // eslint-disable-next-line @typescript-eslint/no-base-to-string
                e!.toString()
              }
              "
            </span>
          );
        } else if (
          typeof e === "object" &&
          e !== null &&
          !Array.isArray(e) &&
          e.title
        ) {
          node = (
            <span key={`${index}-1`} className="type-title">
              {
                // eslint-disable-next-line @typescript-eslint/no-base-to-string
                e.title.toString()
              }
            </span>
          );
        } else {
          node = (
            <span key={`${index}-1`} className="string-type-literal">
              "
              {
                // eslint-disable-next-line @typescript-eslint/no-base-to-string
                e!.toString()
              }
              "
            </span>
          );
        }

        if (index === schema.enum!.length - 1) return node;
        return [node, <span key={`${index}-2`}>{" | "}</span>];
      })
  );
};
