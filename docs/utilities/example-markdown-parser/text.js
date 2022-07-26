import {v4} from "../../_snowpack/pkg/uuid.v8.3.2.js";
export class Text {
  constructor(value) {
    this.value = value;
    this.id = v4();
    this.type = "text";
    this.isBold = false;
    this.isItalic = false;
    this.isCode = false;
    this.isStrike = false;
    this.isLink = false;
  }
  setType(type) {
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
  setHref(href) {
    this.linkHref = href;
  }
  setAsHeader(header) {
    this.header = header;
  }
}
