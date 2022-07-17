export const typeDocsSelectors = {
  useComponent(state, name) {
    const result = state.components.find(([componentName]) => componentName === name);
    return result ? result[1] : void 0;
  },
  useComponentNames(state) {
    return state.components.map(([componentName]) => componentName);
  }
};
