import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./components/app";
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
    // TODO: make the base url specified by env variable
    <Router basename="adwaita-web-docs-app">
      <App />
    </Router>
  );
}
