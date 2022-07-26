import { v4 } from "uuid";
import type { Text } from "./text";

export class TextGroup {
  public readonly id = v4();
  public readonly type = "text-group";
  constructor(public readonly texts: Text[]) {}
}
