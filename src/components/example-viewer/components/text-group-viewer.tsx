import React from "react";
import type { TextGroup } from "../../../utilities/example-markdown-parser/text-group";
import { TextViewer } from "./text-viewer";

export type TextGroupViewerProps = {
  textGroup: TextGroup;
};

export const TextGroupViewer = (props: TextGroupViewerProps) => {
  return (
    <span className="text-group">
      {props.textGroup.texts.map((text) => {
        return <TextViewer key={text.id} text={text} isPartOfGroup />;
      })}
    </span>
  );
};
