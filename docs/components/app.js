import {Box, Paned} from "../_snowpack/pkg/adwaita-web.v0.1.1-canary-83f07fb4b5a2324370770d2358c58f1bf3cb18f5.0.js";
import React from "../_snowpack/pkg/react.v18.2.0.js";
import {Navigate, Route, Routes, useNavigate} from "../_snowpack/pkg/react-router-dom.v6.3.0.js";
import {ComponentDocViewPage} from "../pages/component-doc-view/component-doc-view.js";
import {ErrorPage} from "../pages/error-page/error-page.js";
import {HomePage} from "../pages/home/home.js";
import {githubRepo} from "../quarks/github-repo/github-repo.js";
import {applyProviders} from "./app-context-providers/providers.js";
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
  return applyProviders(/* @__PURE__ */ React.createElement(Box, {
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
  }))))));
}
