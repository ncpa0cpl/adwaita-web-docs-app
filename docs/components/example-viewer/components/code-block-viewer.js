import {Sandpack} from "../../../_snowpack/pkg/@codesandbox.sandpack-react.v1.3.1.js";
import {Box} from "../../../_snowpack/pkg/adwaita-web.v0.1.1-canary-83f07fb4b5a2324370770d2358c58f1bf3cb18f5.0.js";
import React from "../../../_snowpack/pkg/react.v18.2.0.js";
import {ErrorBoundary} from "./error-boundary.js";
export const CodeBlockViewer = (props) => {
  const dependencies = React.useMemo(() => Object.fromEntries(props.codeBlock.getDependencies().map(({package: pkg, version}) => [pkg, version])), [props.codeBlock]);
  const code = React.useMemo(() => props.codeBlock.getCode(), [props.codeBlock]);
  return /* @__PURE__ */ React.createElement(Box, {
    className: "example-sandboxed-code"
  }, /* @__PURE__ */ React.createElement(ErrorBoundary, null, /* @__PURE__ */ React.createElement(Sandpack, {
    template: "react",
    files: {
      "/Example.tsx": code,
      "/App.js": `import App from "./Example";
export default App;`
    },
    customSetup: {dependencies},
    options: {
      recompileDelay: 2500,
      activeFile: "/Example.tsx"
    }
  })));
};
