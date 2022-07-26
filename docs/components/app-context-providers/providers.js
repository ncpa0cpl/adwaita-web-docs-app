import React from "../../_snowpack/pkg/react.v18.2.0.js";
const PROVIDERS = [];
export const applyProviders = (children) => {
  return PROVIDERS.reduceRight((children2, Provider) => /* @__PURE__ */ React.createElement(Provider, null, children2), children);
};
