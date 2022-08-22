import{Box as d,Label as c}from"../../../_snowpack/pkg/adwaita-web.js";import e from"../../../_snowpack/pkg/react.js";import{isRequired as u}from"../utils/is-required.js";import{Description as i}from"./description.js";import{PropertyNameLabel as p}from"./property-name-label.js";import{SchemaView as l}from"./schema-view.js";import{TypeNameLabel as b}from"./type-name-label.js";export const ObjectView=({schema:t,name:r,parent:n,isRoot:a})=>{const s=u(n,r),o=t.properties&&Object.keys(t.properties).length>0||typeof t.additionalProperties=="object";return e.createElement(e.Fragment,null,r&&e.createElement(p,{name:r}),e.createElement("td",null,e.createElement(i,{description:t.description})),e.createElement("td",null,e.createElement("table",{className:"object-type-table"},e.createElement("colgroup",null,e.createElement("col",{className:"property-name-column"}),e.createElement("col",{className:"description-column"}),e.createElement("col",{className:"type-column"})),e.createElement("thead",null,!a&&e.createElement("tr",null,e.createElement("th",{rowSpan:3},n&&!s&&e.createElement("span",null,e.createElement(b,{name:"undefined"}),"|"),e.createElement(c,{className:"complex-object-label"},(t.title?`${t.title} `:"")+(o?"Object {":"Object {}"))))),o&&e.createElement(e.Fragment,null,e.createElement("tbody",null,t.properties&&Object.keys(t.properties).length>0?Object.entries(t.properties).map(([m,E])=>e.createElement("tr",{key:m},e.createElement(l,{name:m,parent:t,schema:E}))):e.createElement("tr",null,e.createElement("td",null,t.propertyNames?e.createElement(d,{horizontal:!0,align:!0,className:"index-signature"},e.createElement("p",{className:"before-after-symbol"},"["),e.createElement("table",{className:"no-paddings no-margins no-borders"},e.createElement("tbody",null,e.createElement("tr",null,e.createElement(l,{parent:t,schema:t.propertyNames})))),e.createElement("p",{className:"before-after-symbol"},"]")):e.createElement(p,{indexSignature:!0,name:"[string | number | symbol]"})),e.createElement("td",null,e.createElement(i,{description:t.description})),e.createElement("td",null,t.additionalProperties&&typeof t.additionalProperties=="object"&&e.createElement("table",{className:"no-paddings no-margins no-borders"},e.createElement("tbody",null,e.createElement("tr",null,e.createElement(l,{parent:t,schema:t.additionalProperties}))))))),e.createElement("tfoot",null,!a&&e.createElement("tr",null,e.createElement("th",{colSpan:3},e.createElement(c,null,"}"))))))))};
