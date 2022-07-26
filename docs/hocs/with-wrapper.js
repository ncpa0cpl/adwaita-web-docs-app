import React from "../_snowpack/pkg/react.v18.2.0.js";
export const withWrapper = (applyWrapper, Component) => {
  return (props) => {
    return applyWrapper(/* @__PURE__ */ React.createElement(Component, {
      ...props
    }));
  };
};
