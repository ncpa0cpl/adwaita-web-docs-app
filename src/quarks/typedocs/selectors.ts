import type { TypeDocs, TypeDocsComponentInfo } from "./typedocs";

export const typeDocsSelectors = {
  useComponent(
    state: TypeDocs,
    name?: string
  ): TypeDocsComponentInfo | undefined {
    const result = state.components.find(
      ([componentName]) => componentName === name
    );
    return result ? result[1] : undefined;
  },

  useComponentNames(state: TypeDocs): string[] {
    return state.components.map(([componentName]) => componentName);
  },
};
