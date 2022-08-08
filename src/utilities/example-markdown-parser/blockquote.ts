import { v4 } from "uuid";
import type { List } from "./list";
import type { Text } from "./text";
import type { TextGroup } from "./text-group";

export class Blockquote {
  public readonly id = v4();
  public readonly type = "blockquote";
  public readonly elements: (Text | TextGroup | Blockquote | List)[] = [];

  constructor() {}

  public addElement(...elem: (Text | TextGroup | Blockquote | List)[]) {
    this.elements.push(...elem);
  }
}
