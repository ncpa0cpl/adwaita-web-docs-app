import { Sandpack } from "@codesandbox/sandpack-react";
import { Box } from "adwaita-web";
import React from "react";
import type { CodeBlock } from "../../../utilities/example-markdown-parser/code-block";
import { ErrorBoundary } from "./error-boundary";

export type CodeBlockViewerProps = {
  codeBlock: CodeBlock;
};

export const CodeBlockViewer = (props: CodeBlockViewerProps) => {
  const dependencies = React.useMemo(
    () =>
      Object.fromEntries(
        props.codeBlock
          .getDependencies()
          .map(({ package: pkg, version }) => [pkg, version])
      ),
    [props.codeBlock]
  );

  const code = React.useMemo(
    () => props.codeBlock.getCode(),
    [props.codeBlock]
  );

  return (
    <Box className="example-sandboxed-code">
      <ErrorBoundary>
        <Sandpack
          template="react"
          files={{
            "/Example.tsx": code,
            "/App.js": /* js */ `import App from "./Example";
export default App;`,
          }}
          customSetup={{ dependencies }}
          options={{
            recompileDelay: 2500,
            activeFile: "/Example.tsx",
            editorHeight: 500,
          }}
        />
      </ErrorBoundary>
    </Box>
  );
};
