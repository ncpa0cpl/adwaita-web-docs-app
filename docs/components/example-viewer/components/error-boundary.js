import React from "../../../_snowpack/pkg/react.v18.2.0.js";
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }
  static getDerivedStateFromError(error) {
    return {hasError: true};
  }
  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return /* @__PURE__ */ React.createElement("h1", null, "Something went wrong.");
    }
    return this.props.children;
  }
}
