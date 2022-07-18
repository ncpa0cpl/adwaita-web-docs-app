import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./components/app";
import { IS_DEV, ROUTER_BASE_URL } from "./env";
import "./index.css";

const rootElem = document.getElementById("root");

window.history.replaceState(
  null,
  "",
  window.location.href.replace(/\/\?\//g, "/")
);

if (rootElem) {
  const root = createRoot(rootElem);
  root.render(
    <Router basename={IS_DEV ? "" : ROUTER_BASE_URL}>
      <App />
    </Router>
  );
}
