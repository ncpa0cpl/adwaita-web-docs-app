import React from "./_snowpack/pkg/react.v18.2.0.js";
import {createRoot} from "./_snowpack/pkg/react-dom.client.v18.2.0.js";
import {BrowserRouter as Router} from "./_snowpack/pkg/react-router-dom.v6.3.0.js";
import {App} from "./components/app.js";
import {IS_DEV, ROUTER_BASE_URL} from "./env.js";
import "./index.css.proxy.js";
const rootElem = document.getElementById("root");
window.history.replaceState(null, "", window.location.href.replace(/\/\?\//g, "/"));
if (rootElem) {
  const root = createRoot(rootElem);
  root.render(/* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(Router, {
    basename: IS_DEV ? "" : ROUTER_BASE_URL
  }, /* @__PURE__ */ React.createElement(App, null))));
}
