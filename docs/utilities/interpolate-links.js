import s from"../_snowpack/pkg/react.js";const o=/\{@link\s(.*?)\s(.*?)}/,i=/{@link (.*?)}/,l=/{@link .*?}/,k=({children:t})=>s.createElement(s.Fragment,null,t);export const interpolateJSDocLinks=t=>{if(!l.test(t))return t;const a=t.split(l).filter(e=>e!=null&&!l.test(e)),r=t.match(new RegExp(i,"g"));if(r){let e=1;for(const n of r)if(o.test(n)){const[,c,m]=n.match(o);a.splice(e,0,s.createElement("a",{target:"_blank",href:c},m)),e+=3}else{const[,c]=n.match(i);a.splice(e,0,s.createElement("a",{target:"_blank",href:c},c)),e+=3}}return a.map((e,n)=>s.createElement(k,{key:n},e))};