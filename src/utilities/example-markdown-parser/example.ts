import { v4 } from "uuid";
import type { Blockquote } from "./blockquote";
import type { CodeBlock } from "./code-block";
import type { List } from "./list";
import type { Text } from "./text";
import type { TextGroup } from "./text-group";

export class Example {
  public readonly id = v4();
  public codeBlocks: CodeBlock[] = [];
  public description: (Text | TextGroup | Blockquote | List)[] = [];

  constructor(public readonly label: string) {}

  public addCodeBlock(codeBlock: CodeBlock) {
    this.codeBlocks.push(codeBlock);
  }

  public addDescriptionBlock(
    ...text: (Text | TextGroup | Blockquote | List)[]
  ) {
    this.description.push(...text);
  }
}
