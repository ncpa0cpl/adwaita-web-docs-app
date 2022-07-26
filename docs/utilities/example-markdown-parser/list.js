import {v4} from "../../_snowpack/pkg/uuid.v8.3.2.js";
export class List {
  constructor() {
    this.id = v4();
    this.type = "list";
    this.elements = [];
  }
  addElement(...elem) {
    this.elements.push(...elem);
  }
}
