import { Sandpack } from "@codesandbox/sandpack-react";
import { Box } from "adwaita-web";
import React from "react";
import { examples } from "../../../quarks/component-examples/examples";
import type { CodeBlock } from "../../../utilities/example-markdown-parser/code-block";
import { ErrorBoundary } from "./error-boundary";

export type CodeBlockViewerProps = {
  codeBlock: CodeBlock;
};

const DEFAULT_CSS = /* css */ `
  html,
  body {
    width: 100%;
    min-height: 100vh;
    margin: unset;
  }
  
  #root {
    width: 100%;
    height: 100vh;
    overflow: scroll;
    display: flex;
    flex-direction: column;
  }
`;

export const CodeBlockViewer = (props: CodeBlockViewerProps) => {
  const wrapperFile = examples.useSelectExampleWrapper();
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

  const files = React.useMemo(() => {
    if (!wrapperFile) {
      return {
        "/styles.css": DEFAULT_CSS,
        "/Example.tsx": code,
        "/App.js": /* js */ `

import Example from "./Example";
export default Example;

`.trim(),
      };
    }

    return {
      "/styles.css": DEFAULT_CSS,
      "/Wrapper.tsx": wrapperFile,
      "/Example.tsx": code,
      "/App.js": /* js */ `

import Example from "./Example";
import Wrapper from "./Wrapper";
export default () => <Wrapper><Example /></Wrapper>;

`.trim(),
    };
  }, [code, wrapperFile]);

  return (
    <Box className="example-sandboxed-code">
      <ErrorBoundary>
        <Sandpack
          template="react"
          files={files}
          customSetup={{ dependencies }}
          options={{
            recompileDelay: 2500,
            activeFile: "/Example.tsx",
            editorHeight: 500,
            closableTabs: false,
            visibleFiles: ["/Example.tsx"],
          }}
        />
      </ErrorBoundary>
    </Box>
  );
};
