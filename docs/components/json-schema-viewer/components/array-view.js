import{Label as i}from"../../../_snowpack/pkg/adwaita-web.js";import e from"../../../_snowpack/pkg/react.js";import{isRequired as E}from"../utils/is-required.js";import{Description as o}from"./description.js";import{PropertyNameLabel as y}from"./property-name-label.js";import{SchemaView as c}from"./schema-view.js";import{TypeNameLabel as n}from"./type-name-label.js";const d=t=>t.items?Array.isArray(t.items)?t.items.some(r=>r.type==="object"||r.type==="array"||r.allOf||r.oneOf||!r.type&&!r.title&&r.metadata):t.items.type==="object"||t.items.type==="array"||t.items.allOf||t.items.oneOf||!t.items.type&&!t.items.title&&t.items.metadata:!1,f=t=>t.items?Array.isArray(t.items)?t.items.map(r=>r.type).filter(r=>!!(r&&r!=="object"&&r!=="array")):[t.items.type].filter(r=>!!(r&&r!=="object"&&r!=="array")):[];export const ArrayView=({schema:t,parent:r,name:l})=>{const a=E(r,l),m=e.useMemo(()=>d(t),[t]),s=f(t);return e.createElement(e.Fragment,null,l&&e.createElement(y,{name:l}),m?e.createElement(e.Fragment,null,e.createElement("td",null,e.createElement(o,{description:t.description})),e.createElement("td",null,e.createElement("table",null,e.createElement("colgroup",null,e.createElement("col",{className:"description-column"}),e.createElement("col",{className:"type-column"})),e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{rowSpan:2},r&&!a&&e.createElement("span",null,e.createElement(n,{name:"undefined"}),"|"),e.createElement(i,{className:"complex-array-item-label"},(t.title?`${t.title} `:"")+"Array<")))),e.createElement("tbody",null,Array.isArray(t.items)?e.createElement(e.Fragment,null,t.items.map((p,u)=>e.createElement("tr",{key:u},e.createElement(c,{schema:p})))):e.createElement(e.Fragment,null,e.createElement("tr",null,e.createElement(c,{schema:t.items})))),e.createElement("tfoot",null,e.createElement("tr",null,e.createElement("th",{colSpan:2},e.createElement(i,null,">"))))))):e.createElement(e.Fragment,null,e.createElement("td",null,e.createElement(o,{description:t.description})),e.createElement("td",null,!m&&e.createElement(e.Fragment,null,e.createElement(n,{name:`Array<${s.join(" ")}>`}),!a&&e.createElement(e.Fragment,null,"|",e.createElement(n,{name:"undefined"}))))))};
