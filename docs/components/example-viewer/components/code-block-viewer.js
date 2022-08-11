import{Sandpack as l}from"../../../_snowpack/pkg/@codesandbox/sandpack-react.js";import{Box as i}from"../../../_snowpack/pkg/adwaita-web.js";import e from"../../../_snowpack/pkg/react.js";import{examples as n}from"../../../quarks/component-examples/examples.js";import{ErrorBoundary as d}from"./error-boundary.js";const a=`
  html,
  body {
    width: 100%;
    min-height: 100%;
    margin: unset;
  }
  
  #root {
    width: 100%;
    min-height: 100%;
  }
`;export const CodeBlockViewer=t=>{const o=n.useSelectExampleWrapper(),p=e.useMemo(()=>Object.fromEntries(t.codeBlock.getDependencies().map(({package:m,version:c})=>[m,c])),[t.codeBlock]),r=e.useMemo(()=>t.codeBlock.getCode(),[t.codeBlock]),s=e.useMemo(()=>o?{"/styles.css":a,"/Wrapper.tsx":o,"/Example.tsx":r,"/App.js":`

import Example from "./Example";
import Wrapper from "./Wrapper";
export default () => <Wrapper><Example /></Wrapper>;

`.trim()}:{"/styles.css":a,"/Example.tsx":r,"/App.js":`

import Example from "./Example";
export default Example;

`.trim()},[r,o]);return e.createElement(i,{className:"example-sandboxed-code"},e.createElement(d,null,e.createElement(l,{template:"react",files:s,customSetup:{dependencies:p},options:{recompileDelay:2500,activeFile:"/Example.tsx",editorHeight:500,closableTabs:!1,visibleFiles:["/Example.tsx"]}})))};
