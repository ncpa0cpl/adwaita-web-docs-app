import { List as AWList, ListItem } from "adwaita-web";
import React from "react";
import type { List } from "../../../utilities/example-markdown-parser/list";
import { MarkdownElementViewer } from "./markdown-element-viewer";

export type ListViewerProps = {
  list: List;
};

export const ListViewer = (props: ListViewerProps) => {
  return (
    <AWList>
      {props.list.elements.map((element) => (
        <ListItem key={element.id}>
          {element.elementType === "text" ? (
            element.text.map((t) => (
              <MarkdownElementViewer key={t.id} element={t} />
            ))
          ) : (
            <ListViewer list={element.nestedList!} />
          )}
        </ListItem>
      ))}
    </AWList>
  );
};
