import {Text} from "../../../_snowpack/pkg/adwaita-web.v0.1.1-canary-83f07fb4b5a2324370770d2358c58f1bf3cb18f5.0.js";
import clsx from "../../../_snowpack/pkg/clsx.v1.2.1.js";
import path from "../../../_snowpack/pkg/path-browserify.v1.0.1.js";
import React from "../../../_snowpack/pkg/react.v18.2.0.js";
import {REPO_NAME, REPO_OWNER} from "../../../adapters/github/constants.js";
import {githubRepo} from "../../../quarks/github-repo/github-repo.js";
import {Link} from "../../link/link.js";
export const TextViewer = (props) => {
  const classes = clsx({
    bolded: props.text.isBold,
    italic: props.text.isItalic,
    striked: props.text.isStrike,
    "code-quote": props.text.isCode
  });
  const renderText = () => {
    if (props.text.isLink && props.text.linkHref) {
      const link = resolveHref(props.text.linkHref);
      if (!link.isExternal) {
        return /* @__PURE__ */ React.createElement(Link, {
          to: link.href,
          preserveQuery: true
        }, props.text.value);
      }
      return /* @__PURE__ */ React.createElement("a", {
        href: link.href
      }, props.text.value);
    }
    return props.text.value;
  };
  if (props.text.header !== void 0) {
    const H = `h${props.text.header}`;
    return /* @__PURE__ */ React.createElement(H, {
      className: classes
    }, renderText());
  }
  if (props.isPartOfGroup)
    return /* @__PURE__ */ React.createElement("span", {
      className: classes
    }, renderText());
  return /* @__PURE__ */ React.createElement(Text, {
    className: classes
  }, renderText());
};
const resolveHref = (href) => {
  if (href.startsWith("http"))
    return {href, isExternal: true};
  const base = `https://github.com/${REPO_OWNER}/${REPO_NAME}/tree/${githubRepo.get().currentBranch}`;
  const match = href.match(/^\.\/([a-zA-Z0-9]+)\.md$/);
  if (match && match[1]) {
    const componentName = match[1];
    return {href: `/${componentName}`, isExternal: false};
  }
  if (href.startsWith(".")) {
    const dir = path.join("/docs", href);
    return {
      href: `${base}${dir}`,
      isExternal: true
    };
  }
  if (href.startsWith("/")) {
    const dir = path.join("/", href);
    return {
      href: `${base}${dir}`,
      isExternal: true
    };
  }
  return {href, isExternal: true};
};
