import {v4} from "../../_snowpack/pkg/uuid.v8.3.2.js";
export class Blockquote {
  constructor() {
    this.id = v4();
    this.type = "blockquote";
    this.elements = [];
  }
  addElement(...elem) {
    this.elements.push(...elem);
  }
}
