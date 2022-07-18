import { Box, Popover } from "adwaita-web";
import type { JSONSchema4 } from "json-schema";
import React from "react";
import { sortAlphanumeric } from "../../../helpers/sort-alphanum";
import { isRequired } from "../utils/is-required";
import { Description } from "./description";
import { PropertyNameLabel } from "./property-name-label";
import { SchemaView } from "./schema-view";
import { TypeNameLabel } from "./type-name-label";

export type FunctionViewProps = {
  schema: JSONSchema4;
  name?: string;
  parent?: JSONSchema4;
};

export const FunctionView = ({ schema, parent, name }: FunctionViewProps) => {
  const isReq = isRequired(parent, name);

  const funcArgs = sortAlphanumeric(
    Object.entries(schema?.properties?.arguments ?? {}),
    ([key, _]: [string, JSONSchema4]) => key
  );
  const returns = schema.properties?.returns;

  const renderArguments = (args: [string, JSONSchema4][]) => {
    const returns: React.ReactNode[] = [];

    for (const index of args.keys()) {
      const [argName, argSchema] = args[index]!;
      const isLast = index === args.length - 1;

      returns.push(<span>{`${argSchema.title ?? `arg_${argName}`}: `}</span>);
      if (
        typeof argSchema.type === "string" &&
        [
          "string",
          "number",
          "integer",
          "boolean",
          "null",
          "any",
          "void",
        ].includes(argSchema.type)
      ) {
        returns.push(<span>{argSchema.type}</span>);
      } else {
        returns.push(
          <Popover
            content={
              <Box
                padded
                border
                className="schema-viewer-container popover-type-schema-table background-medium"
              >
                <table>
                  <tbody>
                    <SchemaView schema={argSchema} />
                  </tbody>
                </table>
              </Box>
            }
          >
            <span className="popover-type-ref">{argSchema.title}</span>
          </Popover>
        );
      }

      if (!isLast) {
        returns.push(<span>{", "}</span>);
      }
    }

    return returns;
  };

  const renderReturnType = (ret: JSONSchema4 | undefined): React.ReactNode => {
    if (!ret) return "void";

    if (
      typeof ret.type === "string" &&
      [
        "string",
        "number",
        "integer",
        "boolean",
        "null",
        "any",
        "void",
      ].includes(ret.type)
    ) {
      return ret.type;
    }

    return (
      <Popover
        content={
          <Box
            padded
            border
            className="schema-viewer-container popover-type-schema-table background-medium"
          >
            <table>
              <tbody>
                <SchemaView schema={ret} />
              </tbody>
            </table>
          </Box>
        }
      >
        <span className="popover-type-ref">{ret.title}</span>
      </Popover>
    );
  };

  return (
    <>
      {name && <PropertyNameLabel name={name} />}
      <td>
        <span className="function-type">
          <>
            <span>(</span>
            <>{renderArguments(funcArgs)}</>
            <span>)</span>
            <span>{" => "}</span>
            <span>{renderReturnType(returns)}</span>
          </>
        </span>
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
