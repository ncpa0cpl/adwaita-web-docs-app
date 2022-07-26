import remarkGfm from "../../_snowpack/pkg/remark-gfm.v3.0.1.js";
import remarkParse from "../../_snowpack/pkg/remark-parse.v10.0.1.js";
import {unified} from "../../_snowpack/pkg/unified.v10.1.2.js";
import {Blockquote} from "./blockquote.js";
import {CodeBlock} from "./code-block.js";
import {Example} from "./example.js";
import {List} from "./list.js";
import {ListElement} from "./list-element.js";
import {Text} from "./text.js";
import {TextGroup} from "./text-group.js";
export class ExampleMarkdownParser {
  constructor(markdown) {
    this.markdown = markdown;
  }
  async parseToAst() {
    this.ast = await unified().use(remarkParse).use(remarkGfm).parse(this.markdown);
  }
  splitChildrenByHeadings() {
    return this.ast.children.reduce((acc, child) => {
      if (child.type === "heading" && child.depth === 1) {
        acc.push({
          header: child,
          elements: []
        });
        return acc;
      }
      acc[acc.length - 1]?.elements.push(child);
      return acc;
    }, []);
  }
  getTextFrom(contents) {
    return contents.reduce((texts, text) => {
      if (text.type === "text") {
        texts.push(text.value);
      }
      return texts;
    }, []).join("");
  }
  getParagraphText(paragraph) {
    const texts = paragraph.reduce((texts2, text) => {
      switch (text.type) {
        case "text":
          texts2.push(new Text(text.value));
          break;
        case "strong": {
          const t = new Text(this.getTextFrom(text.children));
          t.setType("bold");
          texts2.push(t);
          break;
        }
        case "delete": {
          const t = new Text(this.getTextFrom(text.children));
          t.setType("strike");
          texts2.push(t);
          break;
        }
        case "emphasis": {
          const t = new Text(this.getTextFrom(text.children));
          t.setType("italic");
          texts2.push(t);
          break;
        }
        case "link": {
          const t = new Text(this.getTextFrom(text.children));
          t.setType("link");
          t.setHref(text.url);
          texts2.push(t);
          break;
        }
        case "inlineCode": {
          const t = new Text(text.value);
          t.setType("code");
          texts2.push(t);
          break;
        }
        default:
          break;
      }
      return texts2;
    }, []);
    return new TextGroup(texts);
  }
  getList(items) {
    const elements = items.reduce((listElements, listItem) => {
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
  getBlockquote(children) {
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
  async parse() {
    const examples = [];
    await this.parseToAst();
    const exampleAsts = this.splitChildrenByHeadings();
    for (const exampleAst of exampleAsts) {
      const headerText = this.getTextFrom(exampleAst.header.children);
      const example = new Example(headerText);
      for (const element of exampleAst.elements) {
        if (element.type === "code" && ["tsx", "jsx", "js", "ts"].includes(element.lang)) {
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
