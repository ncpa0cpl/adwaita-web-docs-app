import { Box } from "adwaita-web";
import React from "react";
import type { Example } from "../../utilities/example-markdown-parser/example";
import { CodeBlockViewer } from "./components/code-block-viewer";
import { MarkdownElementViewer } from "./components/markdown-element-viewer";
import "./styles.scss";

export type ExampleViewerProps = {
  example: Example;
};

export const ExampleViewer = (props: ExampleViewerProps) => {
  return (
    <Box className="component-example">
      <h1>{props.example.label}</h1>
      <Box className="example-description">
        {props.example.description.map((elem) => (
          <MarkdownElementViewer key={elem.id} element={elem} />
        ))}
      </Box>
      {props.example.codeBlocks.map((codeBlock) => (
        <CodeBlockViewer key={codeBlock.id} codeBlock={codeBlock} />
      ))}
    </Box>
  );
};
