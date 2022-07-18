import { Box, Button } from "adwaita-web";
import type { JSONSchema4 } from "json-schema";
import React from "react";
import JsonViewer from "react-json-view";
import { SchemaView } from "./components/schema-view";
import "./styles.scss";

export type JsonSchemaViewerProps = {
  schema: JSONSchema4;
};

export const JsonSchemaViewer = ({ schema }: JsonSchemaViewerProps) => {
  const [showRaw, setShowRaw] = React.useState(false);

  return (
    <Box className="json-schema-viewer">
      <div className="button-group linked">
        <Button
          size="medium"
          active={!showRaw}
          onClick={() => setShowRaw(false)}
        >
          View
        </Button>
        <Button size="medium" active={showRaw} onClick={() => setShowRaw(true)}>
          Raw
        </Button>
      </div>
      {showRaw ? (
        <Box padded border className="raw-view background-medium">
          <JsonViewer displayDataTypes={false} src={schema} />
        </Box>
      ) : (
        <Box
          padded
          border
          className="schema-viewer-container background-medium"
        >
          <table>
            <tbody>
              <tr>
                <SchemaView schema={schema} />
              </tr>
            </tbody>
          </table>
        </Box>
      )}
    </Box>
  );
};
