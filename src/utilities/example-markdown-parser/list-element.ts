import { v4 } from "uuid";
import type { Blockquote } from "./blockquote";
import type { List } from "./list";
import type { Text } from "./text";
import type { TextGroup } from "./text-group";

export class ListElement {
  public readonly id = v4();
  public readonly type = "list-element";
  public readonly text: (Text | TextGroup | Blockquote)[] = [];
  public nestedList?: List;

  constructor(public readonly elementType: "text" | "nested-list") {}

  public addText(...text: (Text | TextGroup | Blockquote)[]) {
    this.text.push(...text);
  }

  public addNestedList(nestedList: List) {
    this.nestedList = nestedList;
  }
}
