import e from"../../../_snowpack/pkg/react.js";import{isRequired as a}from"../utils/is-required.js";import{Description as i}from"./description.js";import{PropertyNameLabel as o}from"./property-name-label.js";import{TypeNameLabel as r}from"./type-name-label.js";export const NullView=({schema:l,parent:n,name:t})=>{const m=a(n,t);return e.createElement(e.Fragment,null,t&&e.createElement(o,{name:t}),e.createElement("td",null,e.createElement(r,{name:"null"}),!m&&e.createElement(e.Fragment,null,"|",e.createElement(r,{name:"undefined"}))),e.createElement("td",null,e.createElement(i,{description:l.description})))};
