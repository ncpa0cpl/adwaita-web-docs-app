import {v4} from "../../_snowpack/pkg/uuid.v8.3.2.js";
export class Example {
  constructor(label) {
    this.label = label;
    this.id = v4();
    this.codeBlocks = [];
    this.description = [];
  }
  addCodeBlock(codeBlock) {
    this.codeBlocks.push(codeBlock);
  }
  addDescriptionBlock(...text) {
    this.description.push(...text);
  }
}
