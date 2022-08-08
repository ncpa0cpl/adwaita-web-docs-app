import { v4 } from "uuid";

export class Text {
  public readonly id = v4();
  public readonly type = "text";

  public isBold = false;
  public isItalic = false;
  public isCode = false;
  public isStrike = false;
  public isLink = false;
  public linkHref: string | undefined;
  public header: 1 | 2 | 3 | 4 | 5 | 6 | undefined;

  constructor(public readonly value: string) {}

  public setType(type: "bold" | "italic" | "code" | "strike" | "link") {
    switch (type) {
      case "bold":
        this.isBold = true;
        break;
      case "italic":
        this.isItalic = true;
        break;
      case "code":
        this.isCode = true;
        break;
      case "strike":
        this.isStrike = true;
        break;
      case "link":
        this.isLink = true;
        break;
    }
  }

  public setHref(href: string) {
    this.linkHref = href;
  }

  public setAsHeader(header: 1 | 2 | 3 | 4 | 5 | 6) {
    this.header = header;
  }
}
