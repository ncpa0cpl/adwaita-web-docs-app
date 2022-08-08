import { Alert } from "adwaita-web";
import React from "react";
import type { Blockquote } from "../../../utilities/example-markdown-parser/blockquote";
import { MarkdownElementViewer } from "./markdown-element-viewer";

export type BlockquoteViewerProps = {
  blockquote: Blockquote;
};

export const BlockquoteViewer = (props: BlockquoteViewerProps) => {
  return (
    <Alert showClose={false}>
      {props.blockquote.elements.map((elem) => (
        <MarkdownElementViewer key={elem.id} element={elem} />
      ))}
    </Alert>
  );
};
