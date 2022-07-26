import {v4} from "../../_snowpack/pkg/uuid.v8.3.2.js";
export class ListElement {
  constructor(elementType) {
    this.elementType = elementType;
    this.id = v4();
    this.type = "list-element";
    this.text = [];
  }
  addText(...text) {
    this.text.push(...text);
  }
  addNestedList(nestedList) {
    this.nestedList = nestedList;
  }
}
