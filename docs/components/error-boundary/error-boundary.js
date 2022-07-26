import {Label} from "../../_snowpack/pkg/adwaita-web.v0.1.1-canary-83f07fb4b5a2324370770d2358c58f1bf3cb18f5.0.js";
import React from "../../_snowpack/pkg/react.v18.2.0.js";
import "./styles.css.proxy.js";
export class ErrorBoundary extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      error: void 0
    };
  }
  static getDerivedStateFromError(error) {
    return {error};
  }
  render() {
    if (this.state.error) {
      return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Label, {
        danger: true
      }, "There was a problem when displaying this part of the page. Please try again later."));
    }
    return this.props.children;
  }
}
