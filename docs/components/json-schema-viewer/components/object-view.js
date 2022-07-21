import{Label as o}from"../../../_snowpack/pkg/adwaita-web.js";import e from"../../../_snowpack/pkg/react.js";import{isRequired as s}from"../utils/is-required.js";import{Description as E}from"./description.js";import{PropertyNameLabel as b}from"./property-name-label.js";import{SchemaView as u}from"./schema-view.js";import{TypeNameLabel as j}from"./type-name-label.js";export const ObjectView=({schema:t,name:r,parent:l,isRoot:n})=>{var m;const i=s(l,r),a=t.properties&&Object.keys(t.properties).length>0;return e.createElement(e.Fragment,null,r&&e.createElement(b,{name:r}),e.createElement("td",null,e.createElement(E,{description:t.description})),e.createElement("td",null,e.createElement("table",{className:"object-type-table"},e.createElement("thead",null,!n&&e.createElement("tr",null,e.createElement("th",{rowSpan:3},l&&!i&&e.createElement("span",null,e.createElement(j,{name:"undefined"}),"|"),e.createElement(o,{className:"complex-object-label"},(t.title?`${t.title} `:"")+(a?"Object {":"Object {}"))))),a&&e.createElement(e.Fragment,null,e.createElement("tbody",null,Object.entries((m=t.properties)!=null?m:{}).map(([c,p])=>e.createElement("tr",{key:c},e.createElement(u,{name:c,parent:t,schema:p})))),e.createElement("tfoot",null,!n&&e.createElement("tr",null,e.createElement("th",{colSpan:3},e.createElement(o,null,"}"))))))))};
