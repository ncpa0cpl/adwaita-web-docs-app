import React from "./_snowpack/pkg/react.js";
import {createRoot} from "./_snowpack/pkg/react-dom/client.js";
import {BrowserRouter as Router} from "./_snowpack/pkg/react-router-dom.js";
import {App} from "./components/app.js";
import "./index.css.proxy.js";
const rootElem = document.getElementById("root");
if (rootElem) {
  const root = createRoot(rootElem);
  root.render(/* @__PURE__ */ React.createElement(Router, null, /* @__PURE__ */ React.createElement(App, null)));
}
