import * as WT from "../_snowpack/pkg/adwaita-web.v0.1.1-canary-83f07fb4b5a2324370770d2358c58f1bf3cb18f5.0.js";
import {Box} from "../_snowpack/pkg/adwaita-web.v0.1.1-canary-83f07fb4b5a2324370770d2358c58f1bf3cb18f5.0.js";
import Content from "./content/content.js";
import DocTable from "./DocTable.js";
import {ErrorBoundary} from "./error-boundary/error-boundary.js";
const styles = {
  title: {
    marginTop: "2rem",
    marginBottom: "1rem",
    display: "flex",
    flexDirection: "column",
    "& h1": {
      display: "inline-block",
      margin: 0
    },
    "& a": {
      alignSelf: "flex-start",
      marginLeft: "1.5rem",
      fontSize: 12
    }
  },
  usage: {
    minHeight: 500,
    paddingBottom: "5rem"
  }
};
const sourceBase = "https://github.com/romgrk/web-toolkit/blob/master/packages/web-toolkit/";
function DocPage({classes, data}) {
  const Component = WT[data.name];
  return /* @__PURE__ */ React.createElement(Content, null, /* @__PURE__ */ React.createElement("div", {
    className: classes.title
  }, /* @__PURE__ */ React.createElement("h1", null, `<${data.name} />`), /* @__PURE__ */ React.createElement("a", {
    href: `${sourceBase}${data.sourcePath}`,
    className: "link"
  }, "Open source")), /* @__PURE__ */ React.createElement(Box, {
    vertical: true
  }, /* @__PURE__ */ React.createElement("h4", null, "Props"), /* @__PURE__ */ React.createElement(DocTable, {
    data: data.exports.default
  }), /* @__PURE__ */ React.createElement("h4", null, "Usage"), /* @__PURE__ */ React.createElement("div", {
    className: classes.usage
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(ErrorBoundary, null, /* @__PURE__ */ React.createElement(Component, null))))));
}
export default DocPage;
