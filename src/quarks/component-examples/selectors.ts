import type { Examples } from "./examples";

export const exampleSelectors = {
  useComponentExample(state: Examples, name?: string) {
    if (!name) return undefined;
    return state.components[name];
  },
};
