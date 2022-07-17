import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./components/app";
import "./index.css";

const rootElem = document.getElementById("root");

if (rootElem) {
  const root = createRoot(rootElem);
  root.render(
    <Router>
      <App />
    </Router>
  );
}
