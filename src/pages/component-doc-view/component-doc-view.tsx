import { Autocomplete, Box, Label, Text } from "adwaita-web";
import React from "react";
import { useParams } from "react-router-dom";
import { REPO_NAME, REPO_OWNER } from "../../adapters/github/constants";
import { Content } from "../../components/content/content";
import { JsonSchemaViewer } from "../../components/json-schema-viewer/json-schema-viewer";
import { githubRepo } from "../../quarks/github-repo/github-repo";
import type { TypeDocsComponentInfo } from "../../quarks/typedocs/typedocs";
import { typeDocs } from "../../quarks/typedocs/typedocs";
import "./styles.scss";

import { ExampleViewer } from "../../components/example-viewer/example-viewer";
import { useNav } from "../../hooks/use-nav";
import { examples } from "../../quarks/component-examples/examples";
import type { Example } from "../../utilities/example-markdown-parser/example";
import { ExampleMarkdownParser } from "../../utilities/example-markdown-parser/example-markdown-parser";

export const ComponentDocViewPage = () => {
  const navigate = useNav();
  const { componentName } = useParams<{ componentName: string }>();
  const branch = githubRepo.useBranchName();
  const component = typeDocs.useComponent(componentName);
  const componentExampleMarkdown = examples.useComponentExample(componentName);

  const [parsedExamples, setParsedExamples] = React.useState<Example[]>([]);

  const getSourceLinkFor = (component: TypeDocsComponentInfo) => {
    const filename = component.propsSources[0]!.fileName.startsWith("src/")
      ? component.propsSources[0]!.fileName.replace("src/", "")
      : component.propsSources[0]!.fileName;

    if (component.propsSources.length)
      return `https://github.com/${REPO_OWNER}/${REPO_NAME}/tree/${branch}/src/${filename}#L${
        component.propsSources[0]!.line
      }`;
  };

  React.useEffect(() => {
    (async () => {
      if (componentExampleMarkdown) {
        const parser = new ExampleMarkdownParser(componentExampleMarkdown);
        const examples = await parser.parse();
        setParsedExamples(examples);
      } else {
        setParsedExamples([]);
      }
    })();
  }, [componentExampleMarkdown]);

  React.useEffect(() => {
    if (!componentName) {
      navigate("/home", { preserveQuery: true });
    }
  }, [componentName]);

  return (
    <Content>
      <Autocomplete
        options={[]}
        onChange={(value) => {
          console.log(value);
        }}
      />
      {component && componentName ? (
        <div>
          <h1>{`<${componentName} />`}</h1>
          <a href={getSourceLinkFor(component)} className="source-link">
            <Label size="medium" info>
              Source
            </Label>
          </a>
        </div>
      ) : (
        <></>
      )}
      {component && component.description ? (
        <Box>
          <h2>Description</h2>
          <Text>{component.description}</Text>
        </Box>
      ) : (
        <></>
      )}
      {component &&
      component.propsSchema &&
      Object.keys(component.propsSchema.properties ?? {}).length ? (
        <Box vertical>
          <h2>Props</h2>
          <JsonSchemaViewer schema={component.propsSchema} />
        </Box>
      ) : (
        <></>
      )}
      {component ? (
        <Box>
          {parsedExamples.map((example, index) => (
            <ExampleViewer example={example} key={index} />
          ))}
        </Box>
      ) : (
        <></>
      )}
      {!component?.description &&
      Object.keys(component?.propsSchema?.properties ?? {}).length === 0 &&
      parsedExamples.length === 0 ? (
        <Label size="large">
          This component does not have a documentation yet.
        </Label>
      ) : (
        <></>
      )}
    </Content>
  );
};
