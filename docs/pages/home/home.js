import {Box, Icon, Text} from "../../_snowpack/pkg/adwaita-web.js";
import React from "../../_snowpack/pkg/react.js";
import {Link} from "../../_snowpack/pkg/react-router-dom.js";
import {REPO_NAME, REPO_OWNER} from "../../adapters/github/constants.js";
import {Content} from "../../components/content/content.js";
import {typeDocs} from "../../quarks/typedocs/typedocs.js";
export const HomePage = () => {
  const componentNames = typeDocs.useComponentNames();
  const renderComponentLink = (componentName) => {
    if (componentNames.some((name) => name === componentName)) {
      return /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
        to: `/${componentName}`,
        className: "link"
      }, /* @__PURE__ */ React.createElement(Text, null, componentName)));
    }
    return /* @__PURE__ */ React.createElement(React.Fragment, null);
  };
  return /* @__PURE__ */ React.createElement(Content, {
    className: "home-page"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "title"
  }, "web-toolkit"), /* @__PURE__ */ React.createElement(Text, {
    hero: true
  }, "Web-Toolkit is a react UI framework base on the GTK's adwaita theme. It provides high-quality components that are meant to facilitate the implementation of desktop web apps."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Box, {
    horizontal: true
  }, /* @__PURE__ */ React.createElement(Icon.DialogInformation, null), /* @__PURE__ */ React.createElement(Text, {
    size: "large",
    weight: 300
  }, "This documentation guide is a work-in-progress. If you need assistance and your questions are not answered here, please", " ", /* @__PURE__ */ React.createElement("a", {
    href: `https://github.com/${REPO_OWNER}/${REPO_NAME}/issues`,
    className: "link"
  }, "open an issue"), ".")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Text, {
    size: "large",
    as: "div"
  }, /* @__PURE__ */ React.createElement("div", null, "Here are some of the components grouped by category."), /* @__PURE__ */ React.createElement(Box, {
    horizontal: true
  }, /* @__PURE__ */ React.createElement(Box, {
    className: "card"
  }, /* @__PURE__ */ React.createElement("h3", null, "Layout"), /* @__PURE__ */ React.createElement("ul", null, renderComponentLink("Box"), renderComponentLink("Paned"), renderComponentLink("Frame"))), /* @__PURE__ */ React.createElement(Box, {
    className: "card"
  }, /* @__PURE__ */ React.createElement("h3", null, "Input"), /* @__PURE__ */ React.createElement("ul", null, renderComponentLink("Button"), renderComponentLink("Input"), renderComponentLink("Dropdown"), renderComponentLink("DatePicker"))), /* @__PURE__ */ React.createElement(Box, {
    className: "card"
  }, /* @__PURE__ */ React.createElement("h3", null, "Display"), /* @__PURE__ */ React.createElement("ul", null, renderComponentLink("Label"), renderComponentLink("Text"))))));
};
