import { Box, Icon, Text } from "adwaita-web";
import React from "react";
import { Link } from "react-router-dom";
import { REPO_NAME, REPO_OWNER } from "../../adapters/github/constants";
import { Content } from "../../components/content/content";
import { typeDocs } from "../../quarks/typedocs/typedocs";

export const HomePage = () => {
  const componentNames = typeDocs.useComponentNames();

  const renderComponentLink = (componentName: string) => {
    if (componentNames.some((name) => name === componentName)) {
      return (
        <Link to={`/${componentName}`} className="link">
          <Text>{componentName}</Text>
        </Link>
      );
    }
    return <></>;
  };

  return (
    <Content className="home-page">
      <h1 className="title">web-toolkit</h1>
      <Text hero>
        Web-Toolkit is a react UI framework base on the GTK's adwaita theme. It
        provides high-quality components that are meant to facilitate the
        implementation of desktop web apps.
      </Text>
      <br />
      <br />
      <Box horizontal>
        <Icon.DialogInformation />
        <Text size="large" weight={300}>
          This documentation guide is a work-in-progress. If you need assistance
          and your questions are not answered here, please{" "}
          <a
            href={`https://github.com/${REPO_OWNER}/${REPO_NAME}/issues`}
            className="link"
          >
            open an issue
          </a>
          .
        </Text>
      </Box>
      <br />
      <br />
      <Text size="large" as="div">
        <div>Here are some of the components grouped by category.</div>

        <Box horizontal>
          <Box className="card">
            <h3>Layout</h3>
            <ul>
              <li>{renderComponentLink("Box")}</li>
              <li>{renderComponentLink("Paned")}</li>
              <li>{renderComponentLink("Frame")}</li>
            </ul>
          </Box>
          <Box className="card">
            <h3>Input</h3>
            <ul>
              <li>{renderComponentLink("Button")}</li>
              <li>{renderComponentLink("Input")}</li>
              <li>{renderComponentLink("Dropdown")}</li>
              <li>{renderComponentLink("DatePicker")}</li>
            </ul>
          </Box>
          <Box className="card">
            <h3>Display</h3>
            <ul>
              <li>{renderComponentLink("Label")}</li>
              <li>{renderComponentLink("Text")}</li>
            </ul>
          </Box>
        </Box>
      </Text>
    </Content>
  );
};
