import {Label} from "../../_snowpack/pkg/adwaita-web.js";
import React from "../../_snowpack/pkg/react.js";
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
