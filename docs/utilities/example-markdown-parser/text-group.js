import {v4} from "../../_snowpack/pkg/uuid.v8.3.2.js";
export class TextGroup {
  constructor(texts) {
    this.texts = texts;
    this.id = v4();
    this.type = "text-group";
  }
}
