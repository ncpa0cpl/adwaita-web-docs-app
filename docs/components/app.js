import {Box, Paned} from "../_snowpack/pkg/adwaita-web.js";
import React from "../_snowpack/pkg/react.js";
import {Navigate, Route, Routes, useNavigate} from "../_snowpack/pkg/react-router-dom.js";
import {ComponentDocViewPage} from "../pages/component-doc-view/component-doc-view.js";
import {ErrorPage} from "../pages/error-page/error-page.js";
import {HomePage} from "../pages/home/home.js";
import {githubRepo} from "../quarks/github-repo/github-repo.js";
import "./app.css.proxy.js";
import {Main} from "./main/main.js";
import {Sidebar} from "./sidebar/sidebar.js";
export function App() {
  const navigate = useNavigate();
  React.useEffect(() => {
    githubRepo.updateBranchList().catch((e) => {
      navigate("/error");
    });
  }, []);
  return /* @__PURE__ */ React.createElement(Box, {
    vertical: true,
    compact: true,
    className: "App background"
  }, /* @__PURE__ */ React.createElement(Paned, {
    defaultSize: 230,
    fill: true,
    border: "handle"
  }, /* @__PURE__ */ React.createElement(Sidebar, null), /* @__PURE__ */ React.createElement(Main, null, /* @__PURE__ */ React.createElement(Routes, null, /* @__PURE__ */ React.createElement(Route, {
    path: "home",
    element: /* @__PURE__ */ React.createElement(HomePage, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: ":componentName",
    element: /* @__PURE__ */ React.createElement(ComponentDocViewPage, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "error",
    element: /* @__PURE__ */ React.createElement(ErrorPage, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "*",
    element: /* @__PURE__ */ React.createElement(Navigate, {
      to: "/home"
    })
  })))));
}
