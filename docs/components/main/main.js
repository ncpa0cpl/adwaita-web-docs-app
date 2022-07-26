import cx from "../../_snowpack/pkg/clsx.v1.2.1.js";
import React from "../../_snowpack/pkg/react.v18.2.0.js";
import "./styles.css.proxy.js";
export function Main({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ React.createElement("div", {
    id: "main",
    className: cx(className),
    ...props
  }, children);
}
