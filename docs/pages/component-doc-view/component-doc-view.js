import {Autocomplete, Box, Label, Text} from "../../_snowpack/pkg/adwaita-web.v0.1.1-canary-83f07fb4b5a2324370770d2358c58f1bf3cb18f5.0.js";
import React from "../../_snowpack/pkg/react.v18.2.0.js";
import {useParams} from "../../_snowpack/pkg/react-router-dom.v6.3.0.js";
import {REPO_NAME, REPO_OWNER} from "../../adapters/github/constants.js";
import {Content} from "../../components/content/content.js";
import {JsonSchemaViewer} from "../../components/json-schema-viewer/json-schema-viewer.js";
import {githubRepo} from "../../quarks/github-repo/github-repo.js";
import {typeDocs} from "../../quarks/typedocs/typedocs.js";
import "./styles.css.proxy.js";
import {ExampleViewer} from "../../components/example-viewer/example-viewer.js";
import {useNav} from "../../hooks/use-nav.js";
import {examples} from "../../quarks/component-examples/examples.js";
import {ExampleMarkdownParser} from "../../utilities/example-markdown-parser/example-markdown-parser.js";
export const ComponentDocViewPage = () => {
  const navigate = useNav();
  const {componentName} = useParams();
  const branch = githubRepo.useBranchName();
  const component = typeDocs.useComponent(componentName);
  const componentExampleMarkdown = examples.useComponentExample(componentName);
  const [parsedExamples, setParsedExamples] = React.useState([]);
  const getSourceLinkFor = (component2) => {
    const filename = component2.propsSources[0].fileName.startsWith("src/") ? component2.propsSources[0].fileName.replace("src/", "") : component2.propsSources[0].fileName;
    if (component2.propsSources.length)
      return `https://github.com/${REPO_OWNER}/${REPO_NAME}/tree/${branch}/src/${filename}#L${component2.propsSources[0].line}`;
  };
  React.useEffect(() => {
    (async () => {
      if (componentExampleMarkdown) {
        const parser = new ExampleMarkdownParser(componentExampleMarkdown);
        const examples2 = await parser.parse();
        setParsedExamples(examples2);
      } else {
        setParsedExamples([]);
      }
    })();
  }, [componentExampleMarkdown]);
  React.useEffect(() => {
    if (!componentName) {
      navigate("/home", {preserveQuery: true});
    }
  }, [componentName]);
  return /* @__PURE__ */ React.createElement(Content, null, /* @__PURE__ */ React.createElement(Autocomplete, {
    options: [],
    onChange: (value) => {
      console.log(value);
    }
  }), component && componentName ? /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, `<${componentName} />`), /* @__PURE__ */ React.createElement("a", {
    href: getSourceLinkFor(component),
    className: "source-link"
  }, /* @__PURE__ */ React.createElement(Label, {
    size: "medium",
    info: true
  }, "Source"))) : /* @__PURE__ */ React.createElement(React.Fragment, null), component && component.description ? /* @__PURE__ */ React.createElement(Box, null, /* @__PURE__ */ React.createElement("h2", null, "Description"), /* @__PURE__ */ React.createElement(Text, null, component.description)) : /* @__PURE__ */ React.createElement(React.Fragment, null), component && component.propsSchema && Object.keys(component.propsSchema.properties ?? {}).length ? /* @__PURE__ */ React.createElement(Box, {
    vertical: true
  }, /* @__PURE__ */ React.createElement("h2", null, "Props"), /* @__PURE__ */ React.createElement(JsonSchemaViewer, {
    schema: component.propsSchema
  })) : /* @__PURE__ */ React.createElement(React.Fragment, null), component ? /* @__PURE__ */ React.createElement(Box, null, parsedExamples.map((example, index) => /* @__PURE__ */ React.createElement(ExampleViewer, {
    example,
    key: index
  }))) : /* @__PURE__ */ React.createElement(React.Fragment, null), !component?.description && Object.keys(component?.propsSchema?.properties ?? {}).length === 0 && parsedExamples.length === 0 ? /* @__PURE__ */ React.createElement(Label, {
    size: "large"
  }, "This component does not have a documentation yet.") : /* @__PURE__ */ React.createElement(React.Fragment, null));
};
