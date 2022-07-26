import { createElement, Fragment, createContext, useMemo, PureComponent, createRef, useContext, forwardRef, useRef, useCallback, useState, useId, useImperativeHandle, useEffect } from '/_snowpack/pkg/react.v18.2.0.js';
import { useClasser, ClasserProvider } from '/_snowpack/pkg/@code-hike.classer.v0.0.0-e48fa74.js';
export * from '/_snowpack/pkg/@code-hike.classer.v0.0.0-e48fa74.js';
import { extractErrorDetails, SandpackClient, addPackageJSONIfNeeded } from '/_snowpack/pkg/@codesandbox.sandpack-client.v1.2.2.js';
import Te from '/_snowpack/pkg/lodash.isequal.v4.5.0.js';
import { createStitches } from '/_snowpack/pkg/@stitches.core.v1.2.8.js';
import { closeBrackets, closeBracketsKeymap } from '/_snowpack/pkg/@codemirror.closebrackets.v0.19.2.js';
import { defaultKeymap, indentMore, indentLess, deleteGroupBackward } from '/_snowpack/pkg/@codemirror.commands.v0.19.8.js';
import { commentKeymap } from '/_snowpack/pkg/@codemirror.comment.v0.19.1.js';
import { lineNumbers } from '/_snowpack/pkg/@codemirror.gutter.v0.19.9.js';
import { HighlightStyle, tags, highlightTree, defaultHighlightStyle } from '/_snowpack/pkg/@codemirror.highlight.v0.19.8.js';
import { history, historyKeymap } from '/_snowpack/pkg/@codemirror.history.v0.19.2.js';
import { bracketMatching } from '/_snowpack/pkg/@codemirror.matchbrackets.v0.19.4.js';
import { EditorState, StateEffect, EditorSelection, Annotation } from '/_snowpack/pkg/@codemirror.state.v0.19.9.js';
import { Decoration, ViewPlugin, highlightSpecialChars, keymap, EditorView, highlightActiveLine } from '/_snowpack/pkg/@codemirror.view.v0.19.48.js';
import Or from '/_snowpack/pkg/@react-hook.intersection-observer.v3.1.1.js';
import { css } from '/_snowpack/pkg/@codemirror.lang-css.v0.19.3.js';
import { html } from '/_snowpack/pkg/@codemirror.lang-html.v0.19.4.js';
import { javascript } from '/_snowpack/pkg/@codemirror.lang-javascript.v0.19.7.js';
import { markdown } from '/_snowpack/pkg/@codemirror.lang-markdown.v0.19.6.js';
import os from '/_snowpack/pkg/lz-string.v1.4.4.js';

var ee=e=>createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...e}),Ct=()=>createElement(ee,{viewBox:"0 0 17 16"},createElement("path",{d:"M11.0792 8.1078C11.2793 8.25007 11.27 8.55012 11.0616 8.67981L6.02535 11.8135C5.79638 11.956 5.5 11.7913 5.5 11.5216L5.5 8.40703L5.5 4.80661C5.5 4.52735 5.81537 4.36463 6.04296 4.52647L11.0792 8.1078Z"})),Rt=()=>createElement(ee,null,createElement("path",{d:"M8.99126 12.2106L14.0455 6.98196L13.2998 6.21057L7.5 12.2106L13.2998 18.2106L14.0455 17.3924L8.99126 12.2106Z"})),Et=()=>createElement(ee,null,createElement("path",{d:"M13.5087 12.2105L8.45455 17.4392L9.2002 18.2106L15 12.2106L9.2002 6.21057L8.45455 7.02875L13.5087 12.2105Z"})),xe=()=>createElement(ee,null,createElement("path",{clipRule:"evenodd",d:"M16.48 12.8571C16.0883 15.1705 14.1389 16.9286 11.7931 16.9286C9.16499 16.9286 7.03448 14.722 7.03448 12C7.03448 9.27803 9.16499 7.07143 11.7931 7.07143C13.6797 7.07143 15.3099 8.20855 16.0796 9.85714L14.2759 9.85714V11.1429H16.48H16.7586H17.5275H18V6.85714L16.7586 6.85714V8.90778C15.7449 7.16536 13.9004 6 11.7931 6C8.59366 6 6 8.68629 6 12C6 15.3137 8.59366 18 11.7931 18C14.7116 18 17.126 15.7648 17.5275 12.8571H16.48Z",fillRule:"evenodd"})),Tt=()=>createElement("svg",{fill:"none",height:"24",stroke:"currentColor",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},createElement("path",{d:"M10.5714 7H8.07143C7.4797 7 7 7.4797 7 8.07143V15.9286C7 16.5203 7.4797 17 8.07143 17H15.9286C16.5203 17 17 16.5203 17 15.9286V13.4286"}),createElement("path",{d:"M14.1429 7H16.8929C16.952 7 17 7.04798 17 7.10714V9.85715"}),createElement("path",{d:"M11.2858 12.7143L16.8572 7.14282"})),wt=({isOpen:e=!1})=>createElement(ee,{height:"12",viewBox:"0 0 12 11",width:"11"},e?createElement(Fragment,null,createElement("path",{d:"M10.5526 9.66667H1.66675C1.2922 9.66667 0.965754 9.46076 0.794425 9.15596L1.81072 5.0908C1.92201 4.64563 2.32199 4.33333 2.78086 4.33333H11.386C12.0365 4.33333 12.5139 4.94472 12.3561 5.57587L11.5228 8.9092C11.4115 9.35437 11.0115 9.66667 10.5526 9.66667Z",fill:"currentColor"}),createElement("path",{d:"M11.3334 3.63333V3.33333C11.3334 2.78105 10.8857 2.33333 10.3334 2.33333H6.30286C6.10543 2.33333 5.91242 2.2749 5.74816 2.16538L4.25201 1.16795C4.08774 1.05844 3.89473 1 3.69731 1H1.66675C1.11446 1 0.666748 1.44772 0.666748 2L0.666748 8.66667C0.666748 9.21895 1.11446 9.66667 1.66675 9.66667H10.5526C11.0115 9.66667 11.4115 9.35437 11.5228 8.9092L12.3561 5.57587C12.5139 4.94472 12.0365 4.33333 11.386 4.33333H2.78086C2.32199 4.33333 1.92201 4.64563 1.81072 5.0908L0.750081 9.33333",fill:"none",stroke:"currentColor",strokeLinecap:"round"})):createElement("path",{d:"M10.3334 9.66667H1.66675C1.11446 9.66667 0.666748 9.21895 0.666748 8.66667V2C0.666748 1.44772 1.11446 1 1.66675 1H3.69731C3.89473 1 4.08774 1.05844 4.25201 1.16795L5.74816 2.16538C5.91242 2.2749 6.10543 2.33333 6.30286 2.33333H10.3334C10.8857 2.33333 11.3334 2.78105 11.3334 3.33333V8.66667C11.3334 9.21895 10.8857 9.66667 10.3334 9.66667Z",fill:"currentColor",stroke:"currentColor",strokeLinecap:"round"})),Lt=()=>createElement("svg",{fill:"currentColor",height:"12",viewBox:"0 0 10 12",width:"10",xmlns:"http://www.w3.org/2000/svg"},createElement("path",{d:"M1.5 2.33325C1.5 2.05711 1.72386 1.83325 2 1.83325H5.16675V4.56659C5.16675 4.89795 5.43538 5.16658 5.76675 5.16658H8.5V10.3333C8.5 10.6094 8.27614 10.8333 8 10.8333H2C1.72386 10.8333 1.5 10.6094 1.5 10.3333V2.33325ZM9.5 4.67568C9.50005 4.67265 9.50008 4.66962 9.50008 4.66658C9.50008 4.66355 9.50005 4.66052 9.5 4.65749V4.41413C9.5 4.01631 9.34196 3.63478 9.06066 3.35347L6.97978 1.27259C6.69848 0.991287 6.31694 0.833252 5.91912 0.833252H5.66675H2C1.17157 0.833252 0.5 1.50483 0.5 2.33325V10.3333C0.5 11.1617 1.17157 11.8333 2 11.8333H8C8.82843 11.8333 9.5 11.1617 9.5 10.3333V4.67568ZM6.16675 1.89888C6.20518 1.92078 6.24085 1.94787 6.27267 1.9797L8.35355 4.06058C8.3854 4.09243 8.41251 4.12813 8.43442 4.16658H6.16675V1.89888Z",fill:"currentColor"})),Ft=()=>createElement(ee,{height:"8",viewBox:"0 0 16 16",width:"8"},createElement("path",{d:"M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"}));var q={colors:{surface1:"#ffffff",surface2:"#EFEFEF",surface3:"#F3F3F3",disabled:"#C5C5C5",base:"#323232",clickable:"#808080",hover:"#4D4D4D",accent:"#3973E0",error:"#EA3323",errorSurface:"#FCF1F0",warning:"#6A4516",warningSurface:"#FEF2C0"},syntax:{plain:"#151515",comment:{color:"#999",fontStyle:"italic"},keyword:"#7C5AE3",tag:"#0971F1",punctuation:"#3B3B3B",definition:"#85A600",property:"#3B3B3B",static:"#3B3B3B",string:"#2E6BD0"},font:{body:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',size:"13px",lineHeight:"20px"}},Mt={colors:{surface1:"#151515",surface2:"#252525",surface3:"#2F2F2F",disabled:"#4D4D4D",base:"#808080",clickable:"#999999",hover:"#C5C5C5",accent:"#E5E5E5",error:"#EA3323",errorSurface:"#FCF1F0",warning:"#6A4516",warningSurface:"#FEF2C0"},syntax:{plain:"#FFFFFF",comment:{color:"#757575",fontStyle:"italic"},keyword:"#77B7D7",tag:"#DFAB5C",punctuation:"#ffffff",definition:"#86D9CA",property:"#77B7D7",static:"#C64640",string:"#977CDC"},font:{body:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',size:"13px",lineHeight:"20px"}},$t,Nt={light:q,dark:Mt,auto:typeof window!="undefined"&&(($t=window==null?void 0:window.matchMedia)==null?void 0:$t.call(window,"(prefers-color-scheme: dark)").matches)?Mt:q};var m="sp",{createTheme:At,css:u,getCssText:Io,keyframes:Ce}=createStitches({prefix:m}),Po={space:new Array(11).fill(" ").reduce((e,t,o)=>({...e,[o+1]:`${(o+1)*4}px`}),{}),border:{radius:"4px"},layout:{height:"300px"},transitions:{default:"150ms ease"},zIndices:{base:"1",overlay:"2",top:"3"}},It=e=>{let o=Object.entries(e.syntax).reduce((r,[s,n])=>{let i={[`color-${s}`]:n};return typeof n=="object"&&(i=Object.entries(n).reduce((a,[c,l])=>({...a,[`${c}-${s}`]:l}),{})),{...r,...i}},{});return {...Po,colors:e.colors,font:e.font,syntax:o}},Pt=e=>{var n,i,a;let t=q,o="default";if(typeof e=="string"){let c=Nt[e];if(!c)throw new Error(`Invalid theme '${e}' provided.`);return {theme:c,id:e!=null?e:o}}let r={colors:{...t.colors,...(n=e==null?void 0:e.colors)!=null?n:{}},syntax:{...t.syntax,...(i=e==null?void 0:e.syntax)!=null?i:{}},font:{...t.font,...(a=e==null?void 0:e.font)!=null?a:{}}},s=e?Ho(JSON.stringify(r)):o;return {theme:r,id:`sp-${s}`}},Ho=e=>{let t=0;for(let o=0;o<e.length;t&=t)t=31*t+e.charCodeAt(o++);return Math.abs(t)};var p=(...e)=>e.filter(Boolean).join(" ");var pe=e=>{let t=e.lastIndexOf("/");return e.slice(t+1)},Ht=(e,t)=>{let o=(e[0]==="/"?e.slice(1):e).split("/"),r=[];if(o.length===1)r.unshift(o[0]);else for(let s=0;s<t.length;s++){let n=t[s].split("/");for(let i=1;i<=o.length;i++){let a=o[o.length-i],c=n[n.length-i];if(r.length<i&&r.unshift(a),a!==c)break}}return r.length<o.length&&r.unshift(".."),r.join("/")};var Re=e=>{let t=0,o=0,r=0;if(e.startsWith("#")){if(e.length<7)return !0;t=parseInt(e.substr(1,2),16),o=parseInt(e.substr(3,2),16),r=parseInt(e.substr(5,2),16);}else {let n=e.replace("rgb(","").replace("rgba(","").replace(")","").split(",");if(n.length<3)return !0;t=parseInt(n[0],10),o=parseInt(n[1],10),r=parseInt(n[2],10);}return (t*299+o*587+r*114)/1e3<128},J=()=>Math.floor(Math.random()*1e4).toString();var Do=u({all:"initial",fontSize:"$font$size",fontFamily:"$font$body",display:"block",boxSizing:"border-box",textRendering:"optimizeLegibility",WebkitTapHighlightColor:"transparent",WebkitFontSmoothing:"subpixel-antialiased",variants:{variant:{dark:{colorScheme:"dark"},light:{colorScheme:"light"}}},"@media screen and (min-resolution: 2dppx)":{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"},"*":{boxSizing:"border-box"},".sp-wrapper:focus":{outline:"0"}}),Ee=createContext({theme:q,id:"light"}),Ot=({theme:e,children:t,className:o,...r})=>{let{theme:s,id:n}=Pt(e),i=useClasser(m),a=useMemo(()=>At(n,It(s)),[s,n]),c=Re(s.colors.surface1);return createElement(Ee.Provider,{value:{theme:s,id:n}},createElement("div",{className:p(i("wrapper"),a.toString(),Do({variant:c?"dark":"light"}),o),...r},t))},Zs=Ee.Consumer;var Ke={files:{"/src/app/app.component.css":{code:`div {
  text-align: center;
}        
`},"/src/app/app.component.html":{code:`<div>
<h1>{{ helloWorld }}</h1>
</div>     
`},"/src/app/app.component.ts":{code:`import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  helloWorld = "Hello World";
}           
`},"/src/app/app.module.ts":{code:`import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
      
import { AppComponent } from "./app.component";
      
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}       
`},"/src/index.html":{code:`<!doctype html>
<html lang="en">
      
<head>
  <meta charset="utf-8">
  <title>Angular</title>
  <base href="/">
      
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
      
<body>
   <app-root></app-root>
</body>
      
</html>
`},"/src/main.ts":{code:`import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
      
import { AppModule } from "./app/app.module";      

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));
      
`},"/src/polyfills.ts":{code:`import "core-js/proposals/reflect-metadata";   
      import "zone.js/dist/zone";
`}},dependencies:{"@angular/core":"^11.2.0","@angular/platform-browser":"^11.2.0","@angular/platform-browser-dynamic":"^11.2.0","@angular/common":"^11.2.0","@angular/compiler":"^11.2.0","zone.js":"0.11.3","core-js":"3.8.3",rxjs:"6.6.3"},entry:"/src/main.ts",main:"/src/app/app.component.ts",environment:"angular-cli"};var Ze={files:{"/App.js":{code:`export default function App() {
  return <h1>Hello World</h1>
}
`},"/index.js":{code:`import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);`},"/styles.css":{code:`body {
  font-family: sans-serif;
  -webkit-font-smoothing: auto;
  -moz-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: auto;
  text-rendering: optimizeLegibility;
  font-smooth: always;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}

h1 {
  font-size: 1.5rem;
}`},"/public/index.html":{code:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`}},dependencies:{react:"^18.0.0","react-dom":"^18.0.0","react-scripts":"^4.0.0"},entry:"/index.js",main:"/App.js",environment:"create-react-app"};var Qe={files:{"tsconfig.json":{code:`{
  "include": [
    "./**/*"
  ],
  "compilerOptions": {
    "strict": true,
    "esModuleInterop": true,
    "lib": [ "dom", "es2015" ],
    "jsx": "react-jsx"
  }
}`},"/App.tsx":{code:`export default function App(): JSX.Element {
  return <h1>Hello World</h1>
}
`},"/index.tsx":{code:`import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);`},"/styles.css":{code:`body {
  font-family: sans-serif;
  -webkit-font-smoothing: auto;
  -moz-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: auto;
  text-rendering: optimizeLegibility;
  font-smooth: always;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}

h1 {
  font-size: 1.5rem;
}`},"/public/index.html":{code:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`}},dependencies:{react:"^18.0.0","react-dom":"^18.0.0","react-scripts":"^4.0.0"},devDependencies:{"@types/react":"^18.0.0","@types/react-dom":"^18.0.0",typescript:"^4.0.0"},entry:"/index.tsx",main:"/App.tsx",environment:"create-react-app"};var et={files:{"/App.tsx":{code:`import { Component } from "solid-js";

const App: Component = () => {
  return <h1>Hello World</h1>;
};

export default App;`},"/index.tsx":{code:`import { render } from "solid-js/web";
import App from "./App";

import "./styles.css";

render(() => <App />, document.getElementById("app"));`},"/styles.css":{code:`body {
  font-family: sans-serif;
  -webkit-font-smoothing: auto;
  -moz-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: auto;
  text-rendering: optimizeLegibility;
  font-smooth: always;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}

h1 {
  font-size: 1.5rem;
}`},"/index.html":{code:`<html>
<head>
  <title>Parcel Sandbox</title>
  <meta charset="UTF-8" />
</head>
<body>
  <div id="app"></div>
  <script src="src/index.tsx"><\/script>
</body>
</html>`}},dependencies:{"solid-js":"1.3.15"},entry:"/index.tsx",main:"/App.tsx",environment:"solid"};var tt={environment:"svelte",main:"/index.js",entry:"/index.js",files:{"/App.svelte":{code:`<style>
  main {
    font-family: sans-serif;
    text-align: center;
  }
</style>

<script>
  let name = 'World';
<\/script>

<main>
  <h1>Hello {name}</h1>
</main>`},"/index.js":{code:`import App from "./App.svelte";

const app = new App({
  target: document.body
});

export default app;
      `},"/public/index.html":{code:`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf8" />
    <meta name="viewport" content="width=device-width" />

    <title>Svelte app</title>

    <link rel="stylesheet" href="public/bundle.css" />
  </head>

  <body>
    <script src="bundle.js"><\/script>
  </body>
</html>`}},dependencies:{svelte:"^3.0.0"}};var ot={files:{"/src/index.js":{code:`import "./styles.css";

document.getElementById("app").innerHTML = \`
<h1>Hello World</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
\`;
`},"/src/styles.css":{code:`body {
  font-family: sans-serif;
}
      `},"/index.html":{code:`<!DOCTYPE html>
<html>

<head>
  <title>Parcel Sandbox</title>
  <meta charset="UTF-8" />
</head>

<body>
  <div id="app"></div>

  <script src="src/index.js">
  <\/script>
</body>

</html>`}},dependencies:{},entry:"/src/index.js",main:"/src/index.js",environment:"parcel"};var rt={files:{"tsconfig.json":{code:`{
  "compilerOptions": {
    "strict": true,
    "module": "commonjs",
    "jsx": "preserve",
    "esModuleInterop": true,
    "sourceMap": true,
    "allowJs": true,
    "lib": [
      "es6",
      "dom"
    ],
    "rootDir": "src",
    "moduleResolution": "node"
  }
}`},"/src/index.ts":{code:`import "./styles.css";

document.getElementById("app").innerHTML = \`
<h1>Hello World</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
\`;
`},"/src/styles.css":{code:`body {
  font-family: sans-serif;
}
      `},"/index.html":{code:`<!DOCTYPE html>
<html>

<head>
  <title>Parcel Sandbox</title>
  <meta charset="UTF-8" />
</head>

<body>
  <div id="app"></div>

  <script src="src/index.ts">
  <\/script>
</body>

</html>`}},dependencies:{},devDependencies:{typescript:"^4.0.0"},entry:"/src/index.ts",main:"/src/index.ts",environment:"parcel"};var st={files:{"/src/App.vue":{code:`<template>
  <main id="app">
    <h1>Hello World</h1>
  </main>
</template>

<script>
export default {
  name: "App",
};
<\/script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
`},"/src/main.js":{code:`import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
`},"/public/index.html":{code:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <link rel="icon" href="<%= BASE_URL %>favicon.ico" />
    <title>codesandbox</title>
  </head>
  <body>
    <noscript>
      <strong
        >We're sorry but codesandbox doesn't work properly without JavaScript
        enabled. Please enable it to continue.</strong
      >
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
`}},dependencies:{vue:"^2.6.11","@vue/cli-plugin-babel":"4.1.1"},entry:"/src/main.js",main:"/src/App.vue",environment:"vue-cli"};var nt={files:{"/src/App.vue":{code:`<template>
  <main id="app">
    <h1>{{ helloWorld }}</h1>
  </main>
</template>
                             
<script>
import { ref } from "vue";
export default {
   name: "App",
   setup() {
      const helloWorld = ref("Hello World");
      return { helloWorld };
   }
};
<\/script>
                             
<style>
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 60px;
}
</style>   
`},"/src/main.js":{code:`import { createApp } from 'vue'
import App from './App.vue'
            
createApp(App).mount('#app')            
`},"/public/index.html":{code:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>codesandbox</title>
  </head>
  <body>
    <noscript>
      <strong
        >We're sorry but codesandbox doesn't work properly without JavaScript
        enabled. Please enable it to continue.</strong
      >
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
`}},dependencies:{"core-js":"^3.6.5",vue:"^3.0.0-0","@vue/cli-plugin-babel":"4.5.0"},entry:"/src/main.js",main:"/src/App.vue",environment:"vue-cli"};var it={react:Ze,"react-ts":Qe,vue:st,vanilla:ot,"vanilla-ts":rt,vue3:nt,angular:Ke,svelte:tt,solid:et};var me=e=>{var i,a,c,l,d;let t=zo({template:e.template,customSetup:e.customSetup,files:e.files}),o=(a=(i=e.options)==null?void 0:i.visibleFiles)!=null?a:[],r=(c=e.options)==null?void 0:c.activeFile;if(o.length===0&&(e==null?void 0:e.files)){let f=e.files;Object.keys(f).forEach(h=>{let b=f[h];if(typeof b=="string"){o.push(h);return}!r&&b.active&&(r=h,b.hidden===!0&&o.push(h)),b.hidden||o.push(h);});}o.length===0&&(o=[t.main]),t.files[t.entry]||(t.entry=_o(t.entry,t.files)),!r&&t.main&&(r=t.main),(!r||!t.files[r])&&(r=o[0]),o.includes(r)||o.push(r);let s=addPackageJSONIfNeeded(t.files,(l=t.dependencies)!=null?l:{},(d=t.devDependencies)!=null?d:{},t.entry);return {visibleFiles:o.filter(f=>s[f]),activeFile:r,files:s,environment:t.environment}},_o=(e,t)=>{if(!e)return;let o,r=0,s=[".js",".jsx",".ts",".tsx"],n=Object.keys(t).every(i=>i.startsWith("/"));for(;!o&&r<s.length;){let c=`${(()=>e.startsWith("/")?n?e:e.replace(/^\/+/,""):n?`/${e}`:e)().split(".")[0]}${s[r]}`;t[c]!==void 0&&(o=c),r++;}return o},zo=({files:e,template:t,customSetup:o})=>{let r=Vo({customSetup:o,files:e});if(!t){if(!r)return it.vanilla;if(!r.files||Object.keys(r.files).length===0)throw new Error("[sandpack-react]: without a template, you must pass at least one file");return r}let s=it[t];if(!s)throw new Error(`[sandpack-react]: invalid template "${t}" provided`);return r?{files:{...s.files,...r.files},dependencies:{...s.dependencies,...r.dependencies},devDependencies:{...s.devDependencies,...r.devDependencies},entry:r.entry||s.entry,main:r.main||s.main,environment:r.environment||s.environment}:s},at=e=>Object.keys(e).reduce((t,o)=>(typeof e[o]=="string"?t[o]={code:e[o]}:t[o]=e[o],t),{}),Vo=({files:e,customSetup:t})=>{if(!e&&!t)return null;if(!e)return t;let o=at(e);return {...t,files:o}};var we=createContext(null),qo=3e4,Bt=class extends PureComponent{constructor(t){super(t);this.timeoutHook=null;this.initializeSandpackIframeHook=null;this.handleMessage=t=>{this.timeoutHook&&clearTimeout(this.timeoutHook),t.type==="state"?this.setState({bundlerState:t.state}):t.type==="done"&&!t.compilatonError?this.setState({error:null}):t.type==="action"&&t.action==="show-error"?this.setState({error:extractErrorDetails(t)}):t.type==="action"&&t.action==="notification"&&t.notificationType==="error"&&this.setState({error:{message:t.title}});};this.registerReactDevTools=t=>{this.setState({reactDevTools:t});};this.updateCurrentFile=t=>{this.updateFile(this.state.activeFile,t);};this.updateFile=(t,o)=>{var s;let r=this.state.files;if(typeof t=="string"&&o){if(o===((s=this.state.files[t])==null?void 0:s.code))return;r={...r,[t]:{code:o}};}else typeof t=="object"&&(r={...r,...at(t)});this.setState({files:r},this.updateClients);};this.updateClients=()=>{var n,i,a,c;let{files:t,sandpackStatus:o}=this.state,r=(i=(n=this.props.options)==null?void 0:n.recompileMode)!=null?i:"delayed",s=(c=(a=this.props.options)==null?void 0:a.recompileDelay)!=null?c:500;o==="running"&&(r==="immediate"&&Object.values(this.clients).forEach(l=>{l.updatePreview({files:t});}),r==="delayed"&&(window.clearTimeout(this.debounceHook),this.debounceHook=window.setTimeout(()=>{Object.values(this.clients).forEach(l=>{l.updatePreview({files:this.state.files});});},s)));};this.createClient=(t,o)=>{var n,i,a,c,l,d,f;let r=new SandpackClient(t,{files:this.state.files,template:this.state.environment},{externalResources:(n=this.props.options)==null?void 0:n.externalResources,bundlerURL:(i=this.props.options)==null?void 0:i.bundlerURL,startRoute:(a=this.props.options)==null?void 0:a.startRoute,fileResolver:(c=this.props.options)==null?void 0:c.fileResolver,skipEval:(d=(l=this.props.options)==null?void 0:l.skipEval)!=null?d:!1,logLevel:(f=this.props.options)==null?void 0:f.logLevel,showOpenInCodeSandbox:!this.openInCSBRegistered.current,showErrorScreen:!this.errorScreenRegistered.current,showLoadingScreen:!this.loadingScreenRegistered.current,reactDevTools:this.state.reactDevTools});return typeof this.unsubscribe!="function"&&(this.unsubscribe=r.listen(this.handleMessage),this.timeoutHook=setTimeout(()=>{this.setState({sandpackStatus:"timeout"});},qo)),this.unsubscribeClientListeners[o]=this.unsubscribeClientListeners[o]||{},this.queuedListeners[o]&&(Object.keys(this.queuedListeners[o]).forEach(h=>{let b=this.queuedListeners[o][h],v=r.listen(b);this.unsubscribeClientListeners[o][h]=v;}),this.queuedListeners[o]={}),Object.entries(this.queuedListeners.global).forEach(([h,b])=>{let v=r.listen(b);this.unsubscribeClientListeners[o][h]=v;}),r};this.runSandpack=()=>{Object.keys(this.preregisteredIframes).forEach(t=>{let o=this.preregisteredIframes[t];this.clients[t]=this.createClient(o,t);}),this.setState({sandpackStatus:"running"});};this.registerBundler=(t,o)=>{this.state.sandpackStatus==="running"?this.clients[o]=this.createClient(t,o):this.preregisteredIframes[o]=t;};this.unregisterBundler=t=>{var s;let o=this.clients[t];o?(o.cleanup(),(s=o.iframe.contentWindow)==null||s.location.replace("about:blank"),delete this.clients[t]):delete this.preregisteredIframes[t],this.timeoutHook&&clearTimeout(this.timeoutHook),Object.values(this.unsubscribeClientListeners).forEach(n=>{Object.values(n).forEach(a=>a());}),this.setState({sandpackStatus:"idle"});};this.unregisterAllClients=()=>{Object.keys(this.clients).map(this.unregisterBundler),typeof this.unsubscribe=="function"&&(this.unsubscribe(),this.unsubscribe=void 0);};this.setActiveFile=t=>{this.setState({activeFile:t});};this.openFile=t=>{this.setState(({visibleFiles:o})=>{let r=o.includes(t)?o:[...o,t];return {activeFile:t,visibleFiles:r}});};this.closeFile=t=>{this.state.visibleFiles.length!==1&&this.setState(({visibleFiles:o,activeFile:r})=>{let s=o.indexOf(t),n=o.filter(i=>i!==t);return {activeFile:t===r?s===0?o[1]:o[s-1]:r,visibleFiles:n}});};this.deleteFile=t=>{this.setState(({visibleFiles:o,files:r})=>{let s={...r};return delete s[t],{visibleFiles:o.filter(n=>n!==t),files:s}},this.updateClients);};this.addFile=this.updateFile;this.dispatchMessage=(t,o)=>{if(this.state.sandpackStatus!=="running"){console.warn("[sandpack-react]: dispatch cannot be called while in idle mode");return}o?this.clients[o].dispatch(t):Object.values(this.clients).forEach(r=>{r.dispatch(t);});};this.addListener=(t,o)=>{if(o){if(this.clients[o])return this.clients[o].listen(t);{let r=J();return this.queuedListeners[o]=this.queuedListeners[o]||{},this.unsubscribeClientListeners[o]=this.unsubscribeClientListeners[o]||{},this.queuedListeners[o][r]=t,()=>{this.queuedListeners[o][r]?delete this.queuedListeners[o][r]:this.unsubscribeClientListeners[o][r]&&(this.unsubscribeClientListeners[o][r](),delete this.unsubscribeClientListeners[o][r]);}}}else {let r=J();this.queuedListeners.global[r]=t;let n=Object.values(this.clients).map(a=>a.listen(t));return ()=>{n.forEach(a=>a());}}};this.resetFile=t=>{let{files:o}=me(this.props);this.setState(r=>({files:{...r.files,[t]:o[t]}}),this.updateClients);};this.resetAllFiles=()=>{let{files:t}=me(this.props);this.setState({files:t},this.updateClients);};this._getSandpackState=()=>{let{files:t,activeFile:o,visibleFiles:r,visibleFilesFromProps:s,startRoute:n,bundlerState:i,editorState:a,error:c,sandpackStatus:l,environment:d,initMode:f}=this.state;return {files:t,environment:d,visibleFiles:r,visibleFilesFromProps:s,activeFile:o,startRoute:n,error:c,bundlerState:i,status:l,editorState:a,initMode:f,clients:this.clients,dispatch:this.dispatchMessage,errorScreenRegisteredRef:this.errorScreenRegistered,lazyAnchorRef:this.lazyAnchorRef,listen:this.addListener,loadingScreenRegisteredRef:this.loadingScreenRegistered,openInCSBRegisteredRef:this.openInCSBRegistered,registerBundler:this.registerBundler,runSandpack:this.runSandpack,unregisterBundler:this.unregisterBundler,registerReactDevTools:this.registerReactDevTools,openFile:this.openFile,resetFile:this.resetFile,resetAllFiles:this.resetAllFiles,setActiveFile:this.setActiveFile,updateCurrentFile:this.updateCurrentFile,updateFile:this.updateFile,addFile:this.addFile,closeFile:this.closeFile,deleteFile:this.deleteFile}};var i,a,c,l;let{activeFile:o,visibleFiles:r,files:s,environment:n}=me(t);this.state={files:s,environment:n,visibleFiles:r,visibleFilesFromProps:r,activeFile:o,startRoute:(i=this.props.options)==null?void 0:i.startRoute,bundlerState:void 0,error:null,sandpackStatus:((c=(a=this.props.options)==null?void 0:a.autorun)!=null?c:!0)?"initial":"idle",editorState:"pristine",initMode:((l=this.props.options)==null?void 0:l.initMode)||"lazy",reactDevTools:void 0},this.queuedListeners={global:{}},this.unsubscribeClientListeners={},this.preregisteredIframes={},this.clients={},this.lazyAnchorRef=createRef(),this.errorScreenRegistered=createRef(),this.openInCSBRegistered=createRef(),this.loadingScreenRegistered=createRef();}initializeSandpackIframe(){var r,s,n,i,a;if(!((s=(r=this.props.options)==null?void 0:r.autorun)!=null?s:!0))return;let o=(i=(n=this.props.options)==null?void 0:n.initModeObserverOptions)!=null?i:{rootMargin:"1000px 0px"};this.intersectionObserver&&this.lazyAnchorRef.current&&((a=this.intersectionObserver)==null||a.unobserve(this.lazyAnchorRef.current)),this.lazyAnchorRef.current&&this.state.initMode==="lazy"?(this.intersectionObserver=new IntersectionObserver(c=>{var l;c.some(d=>d.isIntersecting)&&(this.initializeSandpackIframeHook=setTimeout(()=>{this.runSandpack();},50),this.lazyAnchorRef.current&&((l=this.intersectionObserver)==null||l.unobserve(this.lazyAnchorRef.current)));},o),this.intersectionObserver.observe(this.lazyAnchorRef.current)):this.lazyAnchorRef.current&&this.state.initMode==="user-visible"?(this.intersectionObserver=new IntersectionObserver(c=>{c.some(l=>l.isIntersecting)?this.initializeSandpackIframeHook=setTimeout(()=>{this.runSandpack();},50):(this.initializeSandpackIframeHook&&clearTimeout(this.initializeSandpackIframeHook),Object.keys(this.clients).map(this.unregisterBundler),this.unregisterAllClients());},o),this.intersectionObserver.observe(this.lazyAnchorRef.current)):this.initializeSandpackIframeHook=setTimeout(()=>this.runSandpack(),50);}componentDidMount(){this.initializeSandpackIframe();}componentDidUpdate(t){var a,c,l,d;((a=t.options)==null?void 0:a.initMode)!==((c=this.props.options)==null?void 0:c.initMode)&&((l=this.props.options)==null?void 0:l.initMode)&&this.setState({initMode:(d=this.props.options)==null?void 0:d.initMode},this.initializeSandpackIframe);let{activeFile:o,visibleFiles:r,files:s,environment:n}=me(this.props);if(t.template!==this.props.template||!Te(t.options,this.props.options)||!Te(t.customSetup,this.props.customSetup)||!Te(t.files,this.props.files)){if(this.setState({activeFile:o,visibleFiles:r,visibleFilesFromProps:r,files:s,environment:n}),this.state.sandpackStatus!=="running")return;Object.values(this.clients).forEach(f=>f.updatePreview({files:s,template:n}));}let i=Te(s,this.state.files)?"pristine":"dirty";i!==this.state.editorState&&this.setState({editorState:i});}componentWillUnmount(){typeof this.unsubscribe=="function"&&this.unsubscribe(),this.timeoutHook&&clearTimeout(this.timeoutHook),this.debounceHook&&clearTimeout(this.debounceHook),this.initializeSandpackIframeHook&&clearTimeout(this.initializeSandpackIframeHook),this.intersectionObserver&&this.intersectionObserver.disconnect();}render(){var n;let{children:t,theme:o,className:r,style:s}=this.props;return createElement(we.Provider,{value:this._getSandpackState()},createElement(ClasserProvider,{classes:(n=this.props.options)==null?void 0:n.classes},createElement(Ot,{className:r,style:s,theme:o},t)))}},jt=Bt,Bn=we.Consumer;function g(){let e=useContext(we);if(e===null)throw new Error('[sandpack-react]: "useSandpack" must be wrapped by a "SandpackProvider"');let{dispatch:t,listen:o,...r}=e;return {sandpack:{...r},dispatch:t,listen:o}}var ue=u({svg:{margin:"auto"}}),w=u({appearance:"none",border:"0",outline:"none",display:"flex",alignItems:"center",fontSize:"inherit",fontFamily:"inherit",backgroundColor:"transparent",transition:"color $default, background $default",cursor:"pointer",color:"$colors$clickable","&:disabled":{color:"$colors$disabled"},"&:hover:not(:disabled,[data-active='true'])":{color:"$colors$hover"},'&[data-active="true"]':{color:"$colors$accent"},[`&.${ue}`]:{padding:"$space$1",width:"$space$8",height:"$space$8",display:"flex"}}),te=u({backgroundColor:"$colors$surface2",borderRadius:"99999px",transition:"all $transitions$default","&:hover":{backgroundColor:"$colors$surface3",color:"$colors$hover"}}),Fe=u({padding:0}),Zo=Ce({"0%":{opacity:0,transform:"translateY(4px)"},"100%":{opacity:1,transform:"translateY(0)"}}),Y=u({position:"absolute",bottom:"0",left:"0",right:"0",top:"0",margin:"0",overflow:"auto",height:"100%",zIndex:"$top"}),Me=u({padding:"$space$4",whiteSpace:"pre-wrap",fontFamily:"$font$mono",backgroundColor:"$colors$errorSurface"}),oe=u({animation:`${Zo} 150ms ease`,color:"$colors$error"});var er=u({position:"absolute",bottom:"$space$2",right:"$space$2",paddingRight:"$space$3"}),Ne=({className:e,onClick:t,...o})=>{let r=useClasser(m),{sandpack:s}=g();return createElement("button",{className:p(r("button"),w,te,er,e),onClick:n=>{s.runSandpack(),t==null||t(n);},type:"button",...o},createElement(Ct,null),"Run")};var lt=u({display:"flex",flexDirection:"column",width:"100%",position:"relative"}),re=({className:e,...t})=>{let o=useClasser(m);return createElement("div",{className:p(o("stack"),lt,e),...t})};var $e=()=>{var t,o,r;let{sandpack:e}=g();return {code:(t=e.files[e.activeFile])==null?void 0:t.code,readOnly:(r=(o=e.files[e.activeFile])==null?void 0:o.readOnly)!=null?r:!1,updateCode:e.updateCurrentFile}};var sr=u({borderBottom:"1px solid $colors$surface2",background:"$colors$surface1"}),nr=u({padding:"0 $space$2",overflow:"auto",display:"flex",flexWrap:"nowrap",alignItems:"stretch",minHeight:"40px",marginBottom:"-1px"}),_t=u({padding:"0px $space$1 2px $space$1",borderRadius:"$border-radius",marginLeft:"$space$1",width:"20px",visibility:"hidden"}),ir=u({display:"block",padding:"0 $space$2",height:"40px",whiteSpace:"nowrap","&:focus":{outline:"none"},"&:focus-visible":{boxShadow:"inset 0 0 0 2px $colors$accent"},[`&:hover > .${_t}`]:{visibility:"unset"}}),Ae=({closableTabs:e,className:t,...o})=>{let{sandpack:r}=g(),s=useClasser(m),{activeFile:n,visibleFiles:i,setActiveFile:a}=r,c=d=>{d.stopPropagation();let f=d.target.closest("[data-active]"),h=f==null?void 0:f.getAttribute("title");!h||r.closeFile(h);},l=d=>{let f=pe(d),h=i.reduce((b,v)=>(v===d||pe(v)===f&&b.push(v),b),[]);return h.length===0?f:Ht(d,h)};return createElement("div",{className:p(s("tabs"),sr,t),translate:"no",...o},createElement("div",{"aria-label":"Select active file",className:p(s("tabs-scrollable-container"),nr),role:"tablist"},i.map(d=>createElement("button",{key:d,"aria-selected":d===n,className:p(s("tab-button"),w,ir),"data-active":d===n,onClick:()=>a(d),role:"tab",title:d,type:"button"},l(d),e&&i.length>1&&createElement("span",{className:p(s("close-button"),_t),onClick:c},createElement(Ft,null))))))};var Ie=()=>{let{theme:e,id:t}=useContext(Ee);return {theme:e,themeId:t}};var dt=(e,t)=>{if(e.length!==t.length)return !1;let o=!0;for(let r=0;r<e.length;r++)if(e[r]!==t[r]){o=!1;break}return o};var he=(e,{line:t,column:o})=>e.line(t).from+(o!=null?o:0)-1,Vt=()=>EditorView.theme({"&":{backgroundColor:`var(--${m}-colors-surface1)`,color:`var(--${m}-syntax-color-plain)`,height:"100%"},".cm-matchingBracket, .cm-nonmatchingBracket, &.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket":{color:"inherit",backgroundColor:"rgba(128,128,128,.25)",backgroundBlendMode:"difference"},"&.cm-editor.cm-focused":{outline:"none"},".cm-activeLine":{backgroundColor:`var(--${m}-colors-surface3)`,borderRadius:`var(--${m}-border-radius)`},".cm-errorLine":{backgroundColor:`var(--${m}-colors-errorSurface)`,borderRadius:`var(--${m}-border-radius)`},".cm-content":{caretColor:`var(--${m}-colors-accent)`,padding:`0 var(--${m}-space-4)`},".cm-scroller":{fontFamily:`var(--${m}-font-mono)`,lineHeight:`var(--${m}-font-lineHeight)`},".cm-gutters":{backgroundColor:`var(--${m}-colors-surface1)`,color:`var(--${m}-colors-disabled)`,border:"none",paddingLeft:`var(--${m}-space-1)`},".cm-gutter.cm-lineNumbers":{fontSize:".6em"},".cm-lineNumbers .cm-gutterElement":{lineHeight:`var(--${m}-font-lineHeight)`,minWidth:`var(--${m}-space-5)`},".cm-content .cm-line":{paddingLeft:`var(--${m}-space-1)`},".cm-content.cm-readonly .cm-line":{paddingLeft:0}}),O=e=>`${m}-syntax-${e}`,Wt=()=>["string","plain","comment","keyword","definition","punctuation","property","tag","static"].reduce((t,o)=>({...t,[`.${O(o)}`]:{color:`$syntax$color$${o}`,fontStyle:`$syntax$fontStyle$${o}`}}),{}),Xt=e=>HighlightStyle.define([{tag:tags.link,textDecoration:"underline"},{tag:tags.emphasis,fontStyle:"italic"},{tag:tags.strong,fontWeight:"bold"},{tag:tags.keyword,class:O("keyword")},{tag:[tags.atom,tags.number,tags.bool],class:O("static")},{tag:tags.tagName,class:O("tag")},{tag:tags.variableName,class:O("plain")},{tag:tags.function(tags.variableName),class:O("definition")},{tag:tags.definition(tags.function(tags.variableName)),class:O("definition")},{tag:tags.propertyName,class:O("property")},{tag:[tags.literal,tags.inserted],class:O(e.syntax.string?"string":"static")},{tag:tags.punctuation,class:O("punctuation")},{tag:[tags.comment,tags.quote],class:O("comment")}]),Gt=(e,t)=>{if(!e&&!t)return "markdown";let o=t;if(!o&&e){let r=e.lastIndexOf(".");o=e.slice(r+1);}switch(o){case"js":case"jsx":return "javascript";case"ts":case"tsx":return "typescript";case"html":case"svelte":case"vue":return "html";case"css":case"less":case"scss":return "css";case"md":return "markdown";default:return "markdown"}},qt=e=>({javascript:javascript({jsx:!0,typescript:!1}),typescript:javascript({jsx:!0,typescript:!0}),html:html(),css:css(),markdown:markdown()})[e],Pe=(...e)=>useCallback(t=>e.forEach(o=>{if(!!o){if(typeof o=="function")return o(t);o.current=t;}}),e);function Jt(e){return ViewPlugin.fromClass(class{constructor(t){this.decorations=this.getDecoration(t);}update(t){}getDecoration(t){if(!e)return Decoration.none;let o=e.map(r=>{var a,c,l;let s=Decoration.line({attributes:{class:(a=r.className)!=null?a:""}}),n=Decoration.mark({class:(c=r.className)!=null?c:"",attributes:(l=r.elementAttributes)!=null?l:void 0}),i=he(t.state.doc,{line:r.line,column:r.startColumn})+1;if(r.startColumn&&r.endColumn){let d=he(t.state.doc,{line:r.line,column:r.endColumn})+1;return n.range(i,d)}return s.range(i)});return Decoration.set(o)}},{decorations:t=>t.decorations})}function Yt(){return br}var gr=Decoration.line({attributes:{class:"cm-errorLine"}}),br=ViewPlugin.fromClass(class{constructor(){this.decorations=Decoration.none;}update(e){e.transactions.forEach(t=>{let o=t.annotation("show-error");if(o!==void 0){let r=he(e.view.state.doc,{line:o})+1;this.decorations=Decoration.set([gr.range(r)]);}else t.annotation("remove-errors")&&(this.decorations=Decoration.none);});}},{decorations:e=>e.decorations});var De=u({margin:"0",display:"block",fontFamily:"$font$mono",fontSize:"$font$size",color:"$syntax$color$plain",lineHeight:"$font$lineHeight"}),pt=u(Wt()),Be=u({flex:1,position:"relative",overflow:"auto",background:"$colors$surface1",".cm-scroller":{padding:"$space$4 0"},[`.${De}`]:{padding:"$space$4 0"}}),mt=u({margin:"0",outline:"none",height:"100%","&:focus-visible":{boxShadow:"inset 0 0 0 4px $colors$accent",paddingLeft:"$space$1",paddingRight:"$space$1"},"&:focus-visible .cm-line":{padding:"0 $space$2"},"&:focus-visible .cm-gutter.cm-lineNumbers":{paddingLeft:"0",paddingRight:"$space$2"}}),Kt=u({fontFamily:"$font$mono",fontSize:"0.8em",position:"absolute",right:"$space$2",bottom:"$space$2",zIndex:"$top",color:"$colors$clickable",backgroundColor:"$colors$surface2",borderRadius:"99999px",padding:"calc($space$1 / 2) $space$2"});var Zt=e=>typeof e=="string"?e:typeof useId=="function"?useId():useRef(J()).current;var eo=({langSupport:e,highlightTheme:t,code:o=""})=>{let r=e.language.parser.parse(o),s=0,n=[],i=(a,c)=>{if(a>s){let l=o.slice(s,a);n.push(c?createElement("span",{children:l,className:c,key:`${a}${s}`}):l),s=a;}};return highlightTree(r,t.match,(a,c,l)=>{i(a,""),i(c,l);}),n};var je=forwardRef(({code:e,filePath:t,fileType:o,onCodeUpdate:r,showLineNumbers:s=!1,showInlineErrors:n=!1,wrapContent:i=!1,editorState:a="pristine",readOnly:c=!1,showReadOnly:l=!0,decorators:d,initMode:f="lazy",id:h,extensions:b=[],extensionsKeymap:v=[]},x)=>{let R=useRef(null),P=Pe(R,x),k=useRef(),{theme:D,themeId:$}=Ie(),[L,S]=useState(e),[F,A]=useState(f==="immediate"),M=useClasser(m),{listen:U}=g(),I=Zt(h),X=useRef([]),ie=useRef([]),{isIntersecting:ae}=Or(R,{rootMargin:"600px 0px",threshold:.2});useImperativeHandle(x,()=>({getCodemirror:()=>k.current})),useEffect(()=>{(f==="lazy"||f==="user-visible")&&ae&&A(!0);},[f,ae]);let K=Gt(t,o),ce=qt(K),le=Xt(D),de=eo({langSupport:ce,highlightTheme:le,code:e}),Z=useMemo(()=>d&&d.sort((E,N)=>E.line-N.line),[d]);useEffect(()=>{if(!R.current||!F)return;let E=setTimeout(function(){let H=[{key:"Tab",run:_=>{var Q;indentMore(_);let V=v.find(({key:ke})=>ke==="Tab");return (Q=V==null?void 0:V.run(_))!=null?Q:!0}},{key:"Shift-Tab",run:({state:_,dispatch:V})=>{var ke;indentLess({state:_,dispatch:V});let Q=v.find(({key:No})=>No==="Shift-Tab");return (ke=Q==null?void 0:Q.run(G))!=null?ke:!0}},{key:"Escape",run:()=>(c||R.current&&R.current.focus(),!0)},{key:"mod-Backspace",run:deleteGroupBackward}],T=[highlightSpecialChars(),history(),closeBrackets(),keymap.of([...closeBracketsKeymap,...defaultKeymap,...historyKeymap,...commentKeymap,...H,...v]),ce,defaultHighlightStyle.fallback,Vt(),le,...b];c?(T.push(EditorState.readOnly.of(!0)),T.push(EditorView.editable.of(!1))):(T.push(bracketMatching()),T.push(highlightActiveLine())),Z&&T.push(Jt(Z)),i&&T.push(EditorView.lineWrapping),s&&T.push(lineNumbers()),n&&T.push(Yt());let Je=EditorState.create({doc:e,extensions:T}),Ye=R.current,xt=Ye.querySelector(".sp-pre-placeholder");xt&&Ye.removeChild(xt);let G=new EditorView({state:Je,parent:Ye,dispatch:_=>{if(G.update([_]),_.docChanged){let V=_.newDoc.sliceString(0,_.newDoc.length);S(V),r==null||r(V);}}});G.contentDOM.setAttribute("data-gramm","false"),c?G.contentDOM.classList.add("cm-readonly"):(G.contentDOM.setAttribute("tabIndex","-1"),G.contentDOM.setAttribute("aria-describedby",`exit-instructions-${I}`)),k.current=G;},0);return ()=>{var N;(N=k.current)==null||N.destroy(),clearTimeout(E);}},[F,s,i,$,Z,c]),useEffect(function(){let N=k.current,H=!dt(b,X.current)||!dt(v,ie.current);N&&H&&(N.dispatch({effects:StateEffect.appendConfig.of(b)}),N.dispatch({effects:StateEffect.appendConfig.of(keymap.of([...v]))}),X.current=b,ie.current=v);},[b,v]),useEffect(()=>{k.current&&a==="dirty"&&window.matchMedia("(min-width: 768px)").matches&&k.current.contentDOM.focus();},[]),useEffect(()=>{if(k.current&&e!==L){let E=k.current,N=E.state.selection.ranges.some(({to:T,from:Je})=>T>e.length||Je>e.length)?EditorSelection.cursor(e.length):E.state.selection,H={from:0,to:E.state.doc.length,insert:e};E.dispatch({changes:H,selection:N});}},[e]),useEffect(function(){if(!n)return;let N=U(H=>{let T=k.current;H.type==="success"?T==null||T.dispatch({annotations:[new Annotation("remove-errors",!0)]}):H.type==="action"&&H.action==="show-error"&&H.line&&(T==null||T.dispatch({annotations:[new Annotation("show-error",H.line)]}));});return ()=>N()},[U,n]);let ye=E=>{E.key==="Enter"&&k.current&&(E.preventDefault(),k.current.contentDOM.focus());},kt=()=>{let E=4;return s&&(E+=6),c||(E+=1),`var(--${m}-space-${E})`};return c?createElement(Fragment,null,createElement("pre",{ref:P,className:p(M("cm",a,K),mt,pt),translate:"no"},createElement("code",{className:p(M("pre-placeholder"),De),style:{marginLeft:kt()}},de)),c&&l&&createElement("span",{className:p(M("read-only"),Kt),...{}},"Read-only")):createElement("div",{ref:P,"aria-describedby":`enter-instructions-${I}`,"aria-label":t?`Code Editor for ${pe(t)}`:"Code Editor",className:p(M("cm",a,K),mt,pt),onKeyDown:ye,role:"group",tabIndex:0,translate:"no",suppressHydrationWarning:!0},createElement("pre",{className:p(M("pre-placeholder"),De),style:{marginLeft:kt()}},de),createElement(Fragment,null,createElement("p",{id:`enter-instructions-${I}`,style:{display:"none"},suppressHydrationWarning:!0},"To enter the code editing mode, press Enter. To exit the edit mode, press Escape"),createElement("p",{id:`exit-instructions-${I}`,style:{display:"none"},suppressHydrationWarning:!0},"You are editing the code. To exit the edit mode, press Escape")))});var ao=forwardRef(({style:e,showTabs:t,showLineNumbers:o=!1,showInlineErrors:r=!1,showRunButton:s=!0,wrapContent:n=!1,closableTabs:i=!1,initMode:a,extensions:c,extensionsKeymap:l,id:d,readOnly:f,showReadOnly:h},b)=>{let{sandpack:v}=g(),{code:x,updateCode:R,readOnly:P}=$e(),{activeFile:k,status:D,editorState:$}=v,L=t!=null?t:v.visibleFiles.length>1,S=useClasser(m),F=A=>{R(A);};return createElement(re,{style:e},L&&createElement(Ae,{closableTabs:i}),createElement("div",{className:p(S("code-editor"),Be)},createElement(je,{key:k,ref:b,code:x,editorState:$,extensions:c,extensionsKeymap:l,filePath:k,id:d,initMode:a||v.initMode,onCodeUpdate:F,readOnly:f||P,showInlineErrors:r,showLineNumbers:o,showReadOnly:h,wrapContent:n}),s&&D==="idle"?createElement(Ne,null):null))});var co=forwardRef(({showTabs:e,showLineNumbers:t,decorators:o,code:r,initMode:s,wrapContent:n,...i},a)=>{let{sandpack:c}=g(),{code:l}=$e(),d=useClasser(m),f=e!=null?e:c.visibleFiles.length>1;return createElement(re,{...i},f?createElement(Ae,null):null,createElement("div",{className:p(d("code-editor"),Be)},createElement(je,{ref:a,code:r!=null?r:l,decorators:o,filePath:c.activeFile,initMode:s||c.initMode,showLineNumbers:t,showReadOnly:!1,wrapContent:n,readOnly:!0})),c.status==="idle"?createElement(Ne,null):null)});var Xr=u({borderRadius:"0",width:"100%",padding:0,marginBottom:"$space$2",svg:{marginRight:"$space$1"}}),_e=({selectFile:e,path:t,active:o,onClick:r,depth:s,isDirOpen:n})=>{let i=useClasser(m),a=l=>{e&&e(t),r==null||r(l);},c=t.split("/").filter(Boolean).pop();return createElement("button",{className:p(i("button","explorer"),w,Xr),"data-active":o,onClick:a,style:{paddingLeft:18*s+"px"},type:"button"},e?createElement(Lt,null):createElement(wt,{isOpen:n}),c)};var lo=({prefixedPath:e,files:t,selectFile:o,activeFile:r,depth:s,autoHiddenFiles:n,visibleFiles:i})=>{let[a,c]=useState(!0);return createElement("div",{key:e},createElement(_e,{depth:s,isDirOpen:a,onClick:()=>c(d=>!d),path:e+"/"}),a&&createElement(ze,{activeFile:r,autoHiddenFiles:n,depth:s+1,files:t,prefixedPath:e,selectFile:o,visibleFiles:i}))};var po=({autoHiddenFiles:e,visibleFiles:t,files:o,prefixedPath:r})=>{let s=t.length>0,n=e&&!s,i=e&&!!s,a=Object.keys(o).filter(d=>{var h;let f=d.startsWith(r);return i?f&&t.includes(d):n?f&&!((h=o[d])==null?void 0:h.hidden):f}).map(d=>d.substring(r.length)),c=new Set(a.filter(d=>d.includes("/")).map(d=>`${r}${d.split("/")[0]}/`)),l=a.filter(d=>!d.includes("/")).map(d=>`${r}${d}`);return {directories:Array.from(c),modules:l}};var ze=({depth:e=0,activeFile:t,selectFile:o,prefixedPath:r,files:s,autoHiddenFiles:n,visibleFiles:i})=>{let{directories:a,modules:c}=po({visibleFiles:i,autoHiddenFiles:n,prefixedPath:r,files:s});return createElement("div",null,a.map(l=>createElement(lo,{key:l,activeFile:t,autoHiddenFiles:n,depth:e,files:s,prefixedPath:l,selectFile:o,visibleFiles:i})),c.map(l=>createElement(_e,{key:l,active:t===l,depth:e,path:l,selectFile:o})))};var qr=u({padding:"$space$3",overflow:"auto",height:"100%"}),cc=({className:e,autoHiddenFiles:t=!1,...o})=>{let{sandpack:r}=g();return createElement("div",{className:p(qr,e),...o},createElement(ze,{activeFile:r.activeFile,autoHiddenFiles:t,files:r.files,prefixedPath:"/",selectFile:r.openFile,visibleFiles:r.visibleFilesFromProps}))};var uo=e=>{let t=e.match(/(https?:\/\/.*?)\//);return t&&t[1]?[t[1],e.replace(t[1],"")]:[e,"/"]};var Yr=u({display:"flex",alignItems:"center",height:"40px",borderBottom:"1px solid $colors$surface2",padding:"$space$2 $space$4",background:"$colors$surface1"}),Kr=u({backgroundColor:"$colors$surface2",color:"$colors$clickable",padding:"$space$1 $space$3",borderRadius:"99999px",border:"1px solid $colors$surface2",height:"24px",lineHeight:"24px",fontSize:"inherit",outline:"none",flex:1,marginLeft:"$space$4",width:"0",transition:"all $transitions$default","&:hover":{backgroundColor:"$colors$surface3"},"&:focus":{backgroundColor:"$surface1",border:"1px solid $colors$accent",color:"$colors$base"}}),fo=({clientId:e,onURLChange:t,className:o,...r})=>{var L;let[s,n]=useState(""),{sandpack:i,dispatch:a,listen:c}=g(),[l,d]=useState((L=i.startRoute)!=null?L:"/"),[f,h]=useState(!1),[b,v]=useState(!1),x=useClasser(m);useEffect(()=>{let S=c(F=>{if(F.type==="urlchange"){let{url:A,back:M,forward:U}=F,[I,X]=uo(A);n(I),d(X),h(M),v(U);}},e);return ()=>S()},[]);let R=S=>{let F=S.target.value.startsWith("/")?S.target.value:`/${S.target.value}`;d(F);},P=S=>{S.code==="Enter"&&(S.preventDefault(),S.stopPropagation(),typeof t=="function"&&t(s+S.currentTarget.value));},k=()=>{a({type:"refresh"});},D=()=>{a({type:"urlback"});},$=()=>{a({type:"urlforward"});};return createElement("div",{className:p(x("navigator"),Yr,o),...r},createElement("button",{"aria-label":"Go back one page",className:p(x("button","icon"),w,Fe),disabled:!f,onClick:D,type:"button"},createElement(Rt,null)),createElement("button",{"aria-label":"Go forward one page",className:p(x("button","icon"),w,Fe),disabled:!b,onClick:$,type:"button"},createElement(Et,null)),createElement("button",{"aria-label":"Refresh page",className:p(x("button","icon"),w,Fe),onClick:k,type:"button"},createElement(xe,null)),createElement("input",{"aria-label":"Current Sandpack URL",className:p(x("input"),Kr),name:"Current Sandpack URL",onChange:R,onKeyDown:P,type:"text",value:l}))};var ho=()=>{var o;let{sandpack:e}=g(),{error:t}=e;return useEffect(()=>{e.errorScreenRegisteredRef.current=!0;},[]),(o=t==null?void 0:t.message)!=null?o:null};var We=({children:e,className:t,...o})=>{let r=ho(),s=useClasser(m);return !r&&!e?null:createElement("div",{className:p(s("overlay","error"),Y,Me,t),translate:"no",...o},createElement("div",{className:p(s("error-message"),oe)},r||e))};var bt=200,bo=(e,t)=>{let{sandpack:o,listen:r}=g(),[s,n]=useState("LOADING");return useEffect(()=>{o.loadingScreenRegisteredRef.current=!0;let i=r(a=>{a.type==="start"&&a.firstLoad===!0&&n("LOADING"),a.type==="done"&&n(c=>c==="LOADING"?"PRE_FADING":"HIDDEN");},e);return ()=>{i();}},[e,o.status==="idle"]),useEffect(()=>{let i;return s==="PRE_FADING"&&!t?n("FADING"):s==="FADING"&&(i=setTimeout(()=>n("HIDDEN"),bt)),()=>{clearTimeout(i);}},[s,t]),o.status==="timeout"?"TIMEOUT":o.status!=="running"?"HIDDEN":s};var rs=e=>os.compressToBase64(JSON.stringify(e)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""),So="https://codesandbox.io/api/v1/sandboxes/define",ss=(e,t)=>{let o=Object.keys(e).reduce((r,s)=>{let n=s.replace("/",""),i={content:e[s].code,isBinary:!1};return {...r,[n]:i}},{});return rs({files:o,...t?{template:t}:null})},vt=({children:e,...t})=>{var i,a,c;let{sandpack:o}=g(),r=useRef(null),[s,n]=useState();return useEffect(function(){let d=setTimeout(()=>{let f=ss(o.files,o.environment),h=new URLSearchParams({parameters:f,query:new URLSearchParams({file:o.activeFile,"from-sandpack":"true"}).toString()});n(h);},600);return ()=>{clearTimeout(d);}},[o.activeFile,o.environment,o.files]),useEffect(function(){o.openInCSBRegisteredRef.current=!0;},[]),((c=(a=(i=s==null?void 0:s.get)==null?void 0:i.call(s,"parameters"))==null?void 0:a.length)!=null?c:0)>1500?createElement("button",{onClick:()=>{var l;return (l=r.current)==null?void 0:l.submit()},title:"Open in CodeSandbox",...t},createElement("form",{ref:r,action:So,method:"POST",target:"_blank"},Array.from(s,([l,d])=>createElement("input",{key:l,name:l,type:"hidden",value:d}))),e):createElement("a",{href:`${So}?${s==null?void 0:s.toString()}`,rel:"noreferrer noopener",target:"_blank",title:"Open in CodeSandbox",...t},e)};var ve=()=>{let e=useClasser(m);return createElement(vt,{className:p(e("button","icon-standalone"),w,ue,te)},createElement(Tt,null))};var St=u({transform:"translate(-4px, 9px) scale(0.13, 0.13)","*":{position:"absolute",width:"96px",height:"96px"}}),ls=u({position:"absolute",right:"$space$2",bottom:"$space$2",zIndex:"$top",width:"32px",height:"32px",borderRadius:"$border$radius",[`.${St}`]:{display:"block"},[`.${w}`]:{display:"none"},[`&:hover .${w}`]:{display:"block"},[`&:hover .${St}`]:{display:"none"}}),ds=Ce({"0%":{transform:"rotateX(-25.5deg) rotateY(45deg)"},"100%":{transform:"rotateX(-25.5deg) rotateY(405deg)"}}),ps=u({animation:`${ds} 1s linear infinite`,animationFillMode:"forwards",transformStyle:"preserve-3d",transform:"rotateX(-25.5deg) rotateY(45deg)","*":{border:"10px solid $colors$clickable",borderRadius:"8px",background:"$colors$surface1"},".top":{transform:"rotateX(90deg) translateZ(44px)",transformOrigin:"50% 50%"},".bottom":{transform:"rotateX(-90deg) translateZ(44px)",transformOrigin:"50% 50%"},".front":{transform:"rotateY(0deg) translateZ(44px)",transformOrigin:"50% 50%"},".back":{transform:"rotateY(-180deg) translateZ(44px)",transformOrigin:"50% 50%"},".left":{transform:"rotateY(-90deg) translateZ(44px)",transformOrigin:"50% 50%"},".right":{transform:"rotateY(90deg) translateZ(44px)",transformOrigin:"50% 50%"}}),xo=({className:e,showOpenInCodeSandbox:t,...o})=>{let r=useClasser(m);return createElement("div",{className:p(r("cube-wrapper"),ls,e),title:"Open in CodeSandbox",...o},t&&createElement(ve,null),createElement("div",{className:p(r("cube"),St)},createElement("div",{className:p(r("sides"),ps)},createElement("div",{className:"top"}),createElement("div",{className:"right"}),createElement("div",{className:"bottom"}),createElement("div",{className:"left"}),createElement("div",{className:"front"}),createElement("div",{className:"back"}))))};var us=u({backgroundColor:"$colors$surface1"}),Ge=({clientId:e,loading:t,className:o,style:r,showOpenInCodeSandbox:s,...n})=>{let i=bo(e,t),a=useClasser(m);if(i==="HIDDEN")return null;if(i==="TIMEOUT")return createElement("div",{className:p(a("overlay","error"),Y,Me,o),...n},createElement("div",{className:p(a("error-message"),oe)},"Unable to establish connection with the sandpack bundler. Make sure you are online or try again later. If the problem persists, please report it via"," ",createElement("a",{className:p(a("error-message"),oe),href:"mailto:hello@codesandbox.io?subject=Sandpack Timeout Error"},"email")," ","or submit an issue on"," ",createElement("a",{className:p(a("error-message"),oe),href:"https://github.com/codesandbox/sandpack/issues",rel:"noreferrer noopener",target:"_blank"},"GitHub.")));let c=i==="LOADING"||i==="PRE_FADING";return createElement("div",{className:p(a("overlay","loading"),Y,us,o),style:{...r,opacity:c?1:0,transition:`opacity ${bt}ms ease-out`},...n},createElement(xo,{showOpenInCodeSandbox:s}))};var Co=e=>{let{dispatch:t}=g();return {refresh:()=>t({type:"refresh"},e),back:()=>t({type:"urlback"},e),forward:()=>t({type:"urlforward"},e)}};var Ro=({clientId:e})=>{let{refresh:t}=Co(e),o=useClasser(m);return createElement("button",{className:p(o("button","icon-standalone"),w,ue,te),onClick:t,title:"Refresh Sandpack",type:"button"},createElement(xe,null))};var gs=u({flex:1,display:"flex",flexDirection:"column",background:"white",overflow:"auto",position:"relative"}),bs=u({border:"0",outline:"0",width:"100%",height:"100%",minHeight:"160px",maxHeight:"2000px",flex:1}),vs=u({display:"flex",position:"absolute",bottom:"$space$2",right:"$space$2",zIndex:"$overlay","> *":{marginLeft:"$space$2"}}),To=forwardRef(({showNavigator:e=!1,showRefreshButton:t=!0,showOpenInCodeSandbox:o=!0,showSandpackErrorOverlay:r=!0,actionsChildren:s=createElement(Fragment,null),className:n,children:i,style:a,...c},l)=>{let{sandpack:d,listen:f}=g(),[h,b]=useState(null),{status:v,registerBundler:x,unregisterBundler:R,errorScreenRegisteredRef:P,openInCSBRegisteredRef:k,loadingScreenRegisteredRef:D}=d,$=useClasser(m),L=useRef(J()),S=useRef(null);k.current=!0,P.current=!0,D.current=!0,useEffect(()=>{let A=S.current,M=L.current;x(A,M);let U=f(I=>{I.type==="resize"&&b(I.height);},M);return ()=>{U(),R(M);}},[]),useImperativeHandle(l,()=>({clientId:L.current,getClient(){return d.clients[L.current]}}),[d]);let F=A=>{!S.current||(S.current.src=A);};return createElement(re,{className:n,style:{...a},...c},e&&createElement(fo,{clientId:L.current,onURLChange:F}),createElement("div",{className:p($("preview-container"),gs)},createElement("iframe",{ref:S,className:p($("preview-iframe"),bs),style:{height:h||void 0},title:"Sandpack Preview"}),r&&createElement(We,null),createElement("div",{className:p($("preview-actions"),vs)},s,!e&&t&&v==="running"&&createElement(Ro,{clientId:L.current}),o&&createElement(ve,null)),createElement(Ge,{clientId:L.current,showOpenInCodeSandbox:o}),i))});function Rs(e){var s,n;let{activeFile:t,bundlerState:o}=e;if(o==null)return null;let r=o.transpiledModules[t+":"];return (n=(s=r==null?void 0:r.source)==null?void 0:s.compiledCode)!=null?n:null}var Lo=()=>{let{sandpack:e}=g();return e.status!=="running"?null:Rs(e)};var Ts=u({display:"flex",flexDirection:"column",width:"100%",position:"relative",overflow:"auto",minHeight:"160px",flex:1}),Vl=({className:e,...t})=>{let{sandpack:o}=g(),r=Lo(),s=useClasser(m),n=useRef(null);return useEffect(()=>{let i=n.current;return i&&o.registerBundler(i,"hidden"),()=>{o.unregisterBundler("hidden");}},[]),createElement("div",{className:p(s("transpiled-code"),Ts,e),...t},createElement(co,{code:r!=null?r:"",initMode:o.initMode,...t}),createElement("iframe",{ref:n,style:{display:"none"},title:"transpiled sandpack code"}),createElement(We,null),createElement(Ge,{clientId:"hidden",showOpenInCodeSandbox:!1}))};var Ms=u({height:"$layout$height",width:"100%"}),Ql=({clientId:e,theme:t,className:o,...r})=>{let{listen:s,sandpack:n}=g(),{theme:i}=Ie(),a=useClasser(m),c=useRef(),[l,d]=useState(null);if(useEffect(()=>{import("/_snowpack/pkg/react-devtools-inline.frontend.v4.4.0.js").then(h=>{c.current=h;});},[]),useEffect(()=>s(b=>{var v;if(b.type==="activate-react-devtools"){let x=e?n.clients[e]:Object.values(n.clients)[0],R=(v=x==null?void 0:x.iframe)==null?void 0:v.contentWindow;c.current&&R&&d(c.current.initialize(R));}}),[c,e,s,n.clients]),useEffect(()=>{n.registerReactDevTools("legacy");},[]),!l)return null;let f=()=>t||(Re(i.colors.surface1)?"dark":"light");return createElement("div",{className:p(a("devtools"),Ms,o),...r},createElement(l,{browserTheme:f()}))};var Is=u({border:"1px solid $colors$surface2",display:"flex",flexWrap:"wrap",alignItems:"stretch",background:"$colors$surface1",borderRadius:"$border$radius",overflow:"hidden","> *:not(:first-child)":{borderLeft:"1px solid $colors$surface2",borderTop:"1px solid $colors$surface2",marginLeft:"-1px",marginTop:"-1px",position:"relative"},[`> *:first-child .${Y}`]:{borderRight:"1px solid $colors$surface2"},[`> .${lt}`]:{flexGrow:1,flexShrink:1,flexBasis:"0",minWidth:"350px",height:"$layout$height","@media print":{height:"auto",display:"block"},"@media screen and (max-width: 768px)":{height:"auto",minWidth:"100% !important;"}}}),Mo=forwardRef(({children:e,className:t,...o},r)=>{let{sandpack:s}=g(),n=useClasser(m),i=Pe(s.lazyAnchorRef,r);return createElement("div",{ref:i,className:p(n("layout"),Is,t),...o},e)});var hd=e=>{var i,a,c,l,d,f,h,b,v,x,R,P,k,D,$,L,S,F,A,M,U,I,X,ie,ae,K,ce,le,de,Z,ye;let t={showTabs:(i=e.options)==null?void 0:i.showTabs,showLineNumbers:(a=e.options)==null?void 0:a.showLineNumbers,showInlineErrors:(c=e.options)==null?void 0:c.showInlineErrors,wrapContent:(l=e.options)==null?void 0:l.wrapContent,closableTabs:(d=e.options)==null?void 0:d.closableTabs,initMode:(f=e.options)==null?void 0:f.initMode,extensions:(b=(h=e.options)==null?void 0:h.codeEditor)==null?void 0:b.extensions,extensionsKeymap:(x=(v=e.options)==null?void 0:v.codeEditor)==null?void 0:x.extensionsKeymap,readOnly:(R=e.options)==null?void 0:R.readOnly,showReadOnly:(P=e.options)==null?void 0:P.showReadOnly,id:(k=e.options)==null?void 0:k.id},o={activeFile:(D=e.options)==null?void 0:D.activeFile,visibleFiles:($=e.options)==null?void 0:$.visibleFiles,recompileMode:(L=e.options)==null?void 0:L.recompileMode,recompileDelay:(S=e.options)==null?void 0:S.recompileDelay,autorun:(F=e.options)==null?void 0:F.autorun,bundlerURL:(A=e.options)==null?void 0:A.bundlerURL,startRoute:(M=e.options)==null?void 0:M.startRoute,skipEval:(U=e.options)==null?void 0:U.skipEval,fileResolver:(I=e.options)==null?void 0:I.fileResolver,initMode:(X=e.options)==null?void 0:X.initMode,initModeObserverOptions:(ie=e.options)==null?void 0:ie.initModeObserverOptions,externalResources:(ae=e.options)==null?void 0:ae.externalResources,logLevel:(K=e.options)==null?void 0:K.logLevel,classes:(ce=e.options)==null?void 0:ce.classes},r=((le=e.options)==null?void 0:le.editorWidthPercentage)||50,s=100-r,n=(de=e.options)==null?void 0:de.editorHeight;return createElement(jt,{customSetup:e.customSetup,files:e.files,options:o,template:e.template,theme:e.theme},createElement(Mo,null,createElement(ao,{...t,style:{height:n,flexGrow:r,flexShrink:r,minWidth:700*(r/(s+r))}}),createElement(To,{showNavigator:(Z=e.options)==null?void 0:Z.showNavigator,showRefreshButton:(ye=e.options)==null?void 0:ye.showRefreshButton,style:{height:n,flexGrow:s,flexShrink:s,minWidth:700*(s/(s+r))}})))};

export { Ke as ANGULAR_TEMPLATE, Rt as BackwardIcon, Ft as CloseIcon, je as CodeEditor, wt as DirectoryIcon, We as ErrorOverlay, Tt as ExportIcon, bt as FADE_ANIMATION_DURATION, Lt as FileIcon, Ae as FileTabs, Et as ForwardIcon, Ge as LoadingOverlay, fo as Navigator, ve as OpenInCodeSandboxButton, Ze as REACT_TEMPLATE, Qe as REACT_TYPESCRIPT_TEMPLATE, Ro as RefreshButton, xe as RefreshIcon, Ne as RunButton, Ct as RunIcon, it as SANDBOX_TEMPLATES, Nt as SANDPACK_THEMES, et as SOLID_TEMPLATE, tt as SVELTE_TEMPLATE, hd as Sandpack, ao as SandpackCodeEditor, co as SandpackCodeViewer, Bn as SandpackConsumer, cc as SandpackFileExplorer, Mo as SandpackLayout, To as SandpackPreview, jt as SandpackProvider, Bt as SandpackProviderClass, we as SandpackReactContext, Ql as SandpackReactDevTools, re as SandpackStack, Zs as SandpackThemeConsumer, Ee as SandpackThemeContext, Ot as SandpackThemeProvider, Vl as SandpackTranspiledCode, vt as UnstyledOpenInCodeSandboxButton, ot as VANILLA_TEMPLATE, rt as VANILLA_TYPESCRIPT_TEMPLATE, st as VUE_TEMPLATE, nt as VUE_TEMPLATE_3, Mt as defaultDark, q as defaultLight, Io as getSandpackCssText, Is as layoutClassName, lt as stackClassName, ir as tabButton, $e as useActiveCode, ho as useErrorMessage, bo as useLoadingOverlayState, g as useSandpack, Co as useSandpackNavigation, Ie as useSandpackTheme, Lo as useTranspiledCode };
