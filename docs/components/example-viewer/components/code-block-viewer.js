import{Sandpack as c}from"../../../_snowpack/pkg/@codesandbox/sandpack-react.js";import{Box as i}from"../../../_snowpack/pkg/adwaita-web.js";import e from"../../../_snowpack/pkg/react.js";import{examples as n}from"../../../quarks/component-examples/examples.js";import{ErrorBoundary as d}from"./error-boundary.js";const a=`
  html,
  body {
    width: 100%;
    min-height: 100vh;
    margin: unset;
  }
  
  #root {
    width: 100%;
    height: 100vh;
    overflow: scroll;
    display: flex;
    flex-direction: column;
  }
`;export const CodeBlockViewer=o=>{const t=n.useSelectExampleWrapper(),p=e.useMemo(()=>Object.fromEntries(o.codeBlock.getDependencies().map(({package:l,version:m})=>[l,m])),[o.codeBlock]),r=e.useMemo(()=>o.codeBlock.getCode(),[o.codeBlock]),s=e.useMemo(()=>t?{"/styles.css":a,"/Wrapper.tsx":t,"/Example.tsx":r,"/App.js":`

import Example from "./Example";
import Wrapper from "./Wrapper";
export default () => <Wrapper><Example /></Wrapper>;

`.trim()}:{"/styles.css":a,"/Example.tsx":r,"/App.js":`

import Example from "./Example";
export default Example;

`.trim()},[r,t]);return e.createElement(i,{className:"example-sandboxed-code"},e.createElement(d,null,e.createElement(c,{template:"react",files:s,customSetup:{dependencies:p},options:{recompileDelay:2500,activeFile:"/Example.tsx",editorHeight:500,closableTabs:!1,visibleFiles:["/Example.tsx"]}})))};
