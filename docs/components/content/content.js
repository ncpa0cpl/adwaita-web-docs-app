import cx from "../../_snowpack/pkg/clsx.v1.2.1.js";
import React from "../../_snowpack/pkg/react.v18.2.0.js";
import {REPO_NAME, REPO_OWNER} from "../../adapters/github/constants.js";
import {GithubCorner} from "../github-corner/github-corner.js";
import "./styles.css.proxy.js";
export function Content({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ React.createElement("div", {
    className: cx(className, "content-root"),
    ...props
  }, /* @__PURE__ */ React.createElement(GithubCorner, {
    className: "content-link",
    url: `https://github.com/${REPO_OWNER}/${REPO_NAME}`
  }), children);
}
