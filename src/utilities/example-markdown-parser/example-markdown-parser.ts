import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import type { Root } from "remark-parse/lib";
import { unified } from "unified";

import type {
  BlockContent,
  Content,
  DefinitionContent,
  Heading,
  ListItem,
  PhrasingContent,
} from "mdast";
import { Blockquote } from "./blockquote";
import { CodeBlock } from "./code-block";
import { Example } from "./example";
import { List } from "./list";
import { ListElement } from "./list-element";
import { Text } from "./text";
import { TextGroup } from "./text-group";

declare global {
  interface Array<T> {
    includes(searchElement: any, fromIndex?: number): boolean;
  }
}

export class ExampleMarkdownParser {
  private ast?: Root;

  constructor(private markdown: string) {}

  private async parseToAst(): Promise<void> {
    this.ast = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .parse(this.markdown);
  }

  private splitChildrenByHeadings() {
    return this.ast!.children.reduce(
      (
        acc: Array<{
          header: Heading;
          elements: Content[];
        }>,
        child
      ) => {
        if (child.type === "heading" && child.depth === 1) {
          acc.push({
            header: child,
            elements: [],
          });
          return acc;
        }
        acc[acc.length - 1]?.elements.push(child);
        return acc;
      },
      []
    );
  }

  private getTextFrom(contents: PhrasingContent[]) {
    return contents
      .reduce((texts: string[], text) => {
        if (text.type === "text") {
          texts.push(text.value);
        }
        return texts;
      }, [])
      .join("");
  }

  private getParagraphText(paragraph: PhrasingContent[]) {
    const texts = paragraph.reduce((texts: Text[], text) => {
      switch (text.type) {
        case "text":
          texts.push(new Text(text.value));
          break;
        case "strong": {
          const t = new Text(this.getTextFrom(text.children));
          t.setType("bold");
          texts.push(t);
          break;
        }
        case "delete": {
          const t = new Text(this.getTextFrom(text.children));
          t.setType("strike");
          texts.push(t);
          break;
        }
        case "emphasis": {
          const t = new Text(this.getTextFrom(text.children));
          t.setType("italic");
          texts.push(t);
          break;
        }
        case "link": {
          const t = new Text(this.getTextFrom(text.children));
          t.setType("link");
          t.setHref(text.url);
          texts.push(t);
          break;
        }
        case "inlineCode": {
          const t = new Text(text.value);
          t.setType("code");
          texts.push(t);
          break;
        }
        default:
          break;
      }
      return texts;
    }, []);

    return new TextGroup(texts);
  }

  private getList(items: ListItem[]): List {
    const elements = items.reduce((listElements: ListElement[], listItem) => {
      if (listItem.type === "listItem") {
        for (const itemChild of listItem.children) {
          if (itemChild.type === "paragraph") {
            const text = this.getParagraphText(itemChild.children);
            const element = new ListElement("text");
            element.addText(text);
            listElements.push(element);
          } else if (itemChild.type === "list") {
            const nestedList = this.getList(itemChild.children);
            const element = new ListElement("nested-list");
            element.addNestedList(nestedList);
            listElements.push(element);
          } else if (itemChild.type === "blockquote") {
            const blockquote = this.getBlockquote(itemChild.children);
            const element = new ListElement("text");
            element.addText(blockquote);
            listElements.push(element);
          }
        }
      }
      return listElements;
    }, []);

    const list = new List();
    list.addElement(...elements);

    return list;
  }

  private getBlockquote(
    children: (BlockContent | DefinitionContent)[]
  ): Blockquote {
    const blockquote = new Blockquote();

    for (const child of children) {
      if (child.type === "paragraph") {
        blockquote.addElement(this.getParagraphText(child.children));
      } else if (child.type === "list") {
        blockquote.addElement(this.getList(child.children));
      } else if (child.type === "blockquote") {
        blockquote.addElement(this.getBlockquote(child.children));
      }
    }

    return blockquote;
  }

  public async parse() {
    const examples: Example[] = [];

    await this.parseToAst();

    const exampleAsts = this.splitChildrenByHeadings();

    for (const exampleAst of exampleAsts) {
      const headerText = this.getTextFrom(exampleAst.header.children);

      const example = new Example(headerText);

      for (const element of exampleAst.elements) {
        if (
          element.type === "code" &&
          ["tsx", "jsx", "js", "ts"].includes(element.lang)
        ) {
          example.addCodeBlock(new CodeBlock(element.value));
        } else if (element.type === "paragraph") {
          example.addDescriptionBlock(this.getParagraphText(element.children));
        } else if (element.type === "list") {
          example.addDescriptionBlock(this.getList(element.children));
        } else if (element.type === "blockquote") {
          example.addDescriptionBlock(this.getBlockquote(element.children));
        } else if (element.type === "heading") {
          const t = new Text(this.getTextFrom(element.children));
          t.setAsHeader(element.depth);
          example.addDescriptionBlock(t);
        }
      }

      examples.push(example);
    }

    return examples;
  }
}
