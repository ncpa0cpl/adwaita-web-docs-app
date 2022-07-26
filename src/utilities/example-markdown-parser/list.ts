import { v4 } from "uuid";
import type { ListElement } from "./list-element";

export class List {
  public readonly id = v4();
  public readonly type = "list";
  public readonly elements: ListElement[] = [];

  constructor() {}

  public addElement(...elem: ListElement[]) {
    this.elements.push(...elem);
  }
}
