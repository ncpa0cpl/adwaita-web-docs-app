import{Label as o}from"../../../_snowpack/pkg/adwaita-web.js";import e from"../../../_snowpack/pkg/react.js";import{isRequired as s}from"../utils/is-required.js";import{Description as E}from"./description.js";import{PropertyNameLabel as u}from"./property-name-label.js";import{SchemaView as b}from"./schema-view.js";import{TypeNameLabel as j}from"./type-name-label.js";export const ObjectView=({schema:t,name:l,parent:r,isRoot:n})=>{var c;const p=s(r,l),a=t.properties&&Object.keys(t.properties).length>0;return e.createElement(e.Fragment,null,l&&e.createElement(u,{name:l}),e.createElement("td",null,e.createElement(E,{description:t.description})),e.createElement("td",null,e.createElement("table",{className:"object-type-table"},e.createElement("colgroup",null,e.createElement("col",{className:"property-name-column"}),e.createElement("col",{className:"description-column"}),e.createElement("col",{className:"type-column"})),e.createElement("thead",null,!n&&e.createElement("tr",null,e.createElement("th",{rowSpan:3},r&&!p&&e.createElement("span",null,e.createElement(j,{name:"undefined"}),"|"),e.createElement(o,{className:"complex-object-label"},(t.title?`${t.title} `:"")+(a?"Object {":"Object {}"))))),a&&e.createElement(e.Fragment,null,e.createElement("tbody",null,Object.entries((c=t.properties)!=null?c:{}).map(([m,i])=>e.createElement("tr",{key:m},e.createElement(b,{name:m,parent:t,schema:i})))),e.createElement("tfoot",null,!n&&e.createElement("tr",null,e.createElement("th",{colSpan:3},e.createElement(o,null,"}"))))))))};
