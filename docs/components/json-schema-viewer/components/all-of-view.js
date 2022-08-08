import{Label as f}from"../../../_snowpack/pkg/adwaita-web.js";import e from"../../../_snowpack/pkg/react.js";import{isRequired as u}from"../utils/is-required.js";import{parseSimpleUnion as E}from"../utils/parse-simple-union.js";import{Description as o}from"./description.js";import{KeyedFragment as d}from"./keyed-fragment.js";import{PropertyNameLabel as i}from"./property-name-label.js";import{SchemaView as y}from"./schema-view.js";import{TypeNameLabel as p}from"./type-name-label.js";const g=t=>t.allOf&&t.allOf.length>1&&t.allOf.some(l=>l.type==="object"||l.type==="array"||Array.isArray(l.type)||l.oneOf||l.allOf);export const AllOfView=({schema:t,name:l,parent:c})=>{const s=u(c,l);return g(t)?e.createElement(e.Fragment,null,l&&e.createElement(i,{name:l}),e.createElement("td",null,e.createElement(o,{description:t.description})),e.createElement("td",null,e.createElement(f,null,"All of:"),e.createElement("table",null,e.createElement("colgroup",null,e.createElement("col",{className:"description-column"}),e.createElement("col",{className:"type-column"})),e.createElement("tbody",null,t.allOf.map((r,n)=>e.createElement("tr",{key:n},e.createElement(y,{schema:r,parent:t}))))))):e.createElement(e.Fragment,null,l&&e.createElement(i,{name:l}),e.createElement("td",null,e.createElement(o,{description:t.description})),e.createElement("td",null,t.allOf.map((r,n)=>{var m;let a=(m=r.type)!=null?m:r.title;return r.enum&&(a=E(r)),e.createElement(d,{key:n},e.createElement(p,{name:a}),n===t.allOf.length-1?"":"&")}),!s&&e.createElement(e.Fragment,null,"|",e.createElement(p,{name:"undefined"}))))};
