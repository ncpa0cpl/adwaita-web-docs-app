export const exampleSelectors = {
  useComponentExample(state, name) {
    if (!name)
      return void 0;
    return state.components[name];
  }
};
