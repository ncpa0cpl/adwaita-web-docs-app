import { Box, Label } from "adwaita-web";
import SchemaViewer from "material-ui-json-schema-viewer";
import React from "react";
import { useParams } from "react-router-dom";
import { REPO_NAME, REPO_OWNER } from "../../adapters/github/constants";
import { Content } from "../../components/content/content";
import { githubRepo } from "../../quarks/github-repo/github-repo";
import type { TypeDocsComponentInfo } from "../../quarks/typedocs/typedocs";
import { typeDocs } from "../../quarks/typedocs/typedocs";
import "./styles.scss";

export const ComponentDocViewPage = () => {
  const { componentName } = useParams<{ componentName: string }>();
  const branch = githubRepo.useBranchName();
  const component = typeDocs.useComponent(componentName);

  const getSourceLinkFor = (component: TypeDocsComponentInfo) => {
    const filename = component.propsSources[0]!.fileName.startsWith("src/")
      ? component.propsSources[0]!.fileName.replace("src/", "")
      : component.propsSources[0]!.fileName;

    if (component.propsSources.length)
      return `https://github.com/${REPO_OWNER}/${REPO_NAME}/tree/${branch}/src/${filename}#L${
        component.propsSources[0]!.line
      }`;
  };

  return (
    <Content>
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

      <Box vertical>
        {component && component.propsSchema ? <h4>Props</h4> : <></>}
        {!component ? (
          <></>
        ) : (
          <SchemaViewer key={componentName} schema={component.propsSchema} />
        )}
      </Box>
    </Content>
  );
};
