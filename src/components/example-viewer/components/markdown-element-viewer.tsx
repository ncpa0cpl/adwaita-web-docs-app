import React from "react";
import type { Blockquote } from "../../../utilities/example-markdown-parser/blockquote";
import type { List } from "../../../utilities/example-markdown-parser/list";
import type { Text } from "../../../utilities/example-markdown-parser/text";
import type { TextGroup } from "../../../utilities/example-markdown-parser/text-group";
import { BlockquoteViewer } from "./blockqoute-viewer";
import { ListViewer } from "./list-viewer";
import { TextGroupViewer } from "./text-group-viewer";
import { TextViewer } from "./text-viewer";

export type MarkdownElementViewerProps = {
  element: TextGroup | Text | Blockquote | List;
};

export const MarkdownElementViewer = ({
  element,
}: MarkdownElementViewerProps) => {
  if (element.type === "list") {
    return <ListViewer list={element} />;
  }

  if (element.type === "blockquote") {
    return <BlockquoteViewer blockquote={element} />;
  }

  if (element.type === "text") {
    return <TextViewer text={element} />;
  }

  return <TextGroupViewer textGroup={element} />;
};
