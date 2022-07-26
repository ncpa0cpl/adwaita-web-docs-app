import {Box, Icon, Text} from "../_snowpack/pkg/adwaita-web.v0.1.1-canary-83f07fb4b5a2324370770d2358c58f1bf3cb18f5.0.js";
import {Link} from "../_snowpack/pkg/react-router-dom.v6.3.0.js";
import Content from "./content/content.js";
const styles = {
  root: {},
  title: {
    fontWeight: 400,
    fontSize: "3rem"
  },
  card: {
    minWidth: 200
  }
};
function Home({classes}) {
  return /* @__PURE__ */ React.createElement(Content, {
    className: classes.root
  }, /* @__PURE__ */ React.createElement("h1", {
    className: classes.title
  }, "web-toolkit"), /* @__PURE__ */ React.createElement(Text, {
    hero: true
  }, "Web-Toolkit is a react UI framework base on the GTK's adwaita theme. It provides high-quality components that are meant to facilitate the implementation of desktop web apps."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Box, {
    horizontal: true
  }, /* @__PURE__ */ React.createElement(Icon, {
    name: "dialog-information"
  }), /* @__PURE__ */ React.createElement(Text, {
    size: "large",
    weight: 300
  }, "This documentation guide is a work-in-progress. If you need assistance and your questions are not answered here, please", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/romgrk/web-toolkit/issues",
    className: "link"
  }, "open an issue"), ".")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Text, {
    size: "large",
    as: "div"
  }, /* @__PURE__ */ React.createElement("div", null, "Here are some of the components grouped by category."), /* @__PURE__ */ React.createElement(Box, {
    horizontal: true
  }, /* @__PURE__ */ React.createElement(Box, {
    className: classes.card
  }, /* @__PURE__ */ React.createElement("h3", null, "Layout"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/component/box",
    className: "link"
  }, "Box")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/component/paned",
    className: "link"
  }, "Paned")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/component/frame",
    className: "link"
  }, "Frame")))), /* @__PURE__ */ React.createElement(Box, {
    className: classes.card
  }, /* @__PURE__ */ React.createElement("h3", null, "Input"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/component/button",
    className: "link"
  }, "Button")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/component/input",
    className: "link"
  }, "Input")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/component/dropdown",
    className: "link"
  }, "Dropdown")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/component/datepicker",
    className: "link"
  }, "DatePicker")))), /* @__PURE__ */ React.createElement(Box, {
    className: classes.card
  }, /* @__PURE__ */ React.createElement("h3", null, "Display"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/component/icon",
    className: "link"
  }, "Icon")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/component/label",
    className: "link"
  }, "Label")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/component/text",
    className: "link"
  }, "Text")))))));
}
export default Home;
