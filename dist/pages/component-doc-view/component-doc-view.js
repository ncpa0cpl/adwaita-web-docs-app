import {Box, Label} from "../../_snowpack/pkg/adwaita-web.js";
import SchemaViewer from "../../_snowpack/pkg/material-ui-json-schema-viewer.js";
import React from "../../_snowpack/pkg/react.js";
import {useParams} from "../../_snowpack/pkg/react-router-dom.js";
import {REPO_NAME, REPO_OWNER} from "../../adapters/github/constants.js";
import {Content} from "../../components/content/content.js";
import {githubRepo} from "../../quarks/github-repo/github-repo.js";
import {typeDocs} from "../../quarks/typedocs/typedocs.js";
import "./styles.css.proxy.js";
export const ComponentDocViewPage = () => {
  const {componentName} = useParams();
  const branch = githubRepo.useBranchName();
  const component = typeDocs.useComponent(componentName);
  const getSourceLinkFor = (component2) => {
    const filename = component2.propsSources[0].fileName.startsWith("src/") ? component2.propsSources[0].fileName.replace("src/", "") : component2.propsSources[0].fileName;
    if (component2.propsSources.length)
      return `https://github.com/${REPO_OWNER}/${REPO_NAME}/tree/${branch}/src/${filename}#L${component2.propsSources[0].line}`;
  };
  return /* @__PURE__ */ React.createElement(Content, null, component && componentName ? /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, `<${componentName} />`), /* @__PURE__ */ React.createElement("a", {
    href: getSourceLinkFor(component),
    className: "source-link"
  }, /* @__PURE__ */ React.createElement(Label, {
    size: "medium",
    info: true
  }, "Source"))) : /* @__PURE__ */ React.createElement(React.Fragment, null), /* @__PURE__ */ React.createElement(Box, {
    vertical: true
  }, component && component.propsSchema ? /* @__PURE__ */ React.createElement("h4", null, "Props") : /* @__PURE__ */ React.createElement(React.Fragment, null), !component ? /* @__PURE__ */ React.createElement(React.Fragment, null) : /* @__PURE__ */ React.createElement(SchemaViewer, {
    key: componentName,
    schema: component.propsSchema
  })));
};
