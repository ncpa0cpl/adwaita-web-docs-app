import{r as c}from"./common/index-2403f0ea.js";import{_ as F}from"./common/extends-b13c3e88.js";import"./common/_commonjsHelpers-4f955397.js";var R;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(R||(R={}));var z=function(e){return e},A="beforeunload",re="popstate";function le(e){e===void 0&&(e={});var t=e,n=t.window,a=n===void 0?document.defaultView:n,r=a.history;function i(){var s=a.location,h=s.pathname,g=s.search,S=s.hash,y=r.state||{};return[y.idx,z({pathname:h,search:g,hash:S,state:y.usr||null,key:y.key||"default"})]}var l=null;function o(){if(l)d.call(l),l=null;else{var s=R.Pop,h=i(),g=h[0],S=h[1];if(d.length){if(g!=null){var y=f-g;y&&(l={action:s,location:S,retry:function(){B(y*-1)}},B(y))}}else W(s)}}a.addEventListener(re,o);var u=R.Pop,p=i(),f=p[0],m=p[1],P=q(),d=q();f==null&&(f=0,r.replaceState(F({},r.state,{idx:f}),""));function v(s){return typeof s=="string"?s:N(s)}function E(s,h){return h===void 0&&(h=null),z(F({pathname:m.pathname,hash:"",search:""},typeof s=="string"?k(s):s,{state:h,key:ie()}))}function K(s,h){return[{usr:s.state,key:s.key,idx:h},v(s)]}function U(s,h,g){return!d.length||(d.call({action:s,location:h,retry:g}),!1)}function W(s){u=s;var h=i();f=h[0],m=h[1],P.call({action:u,location:m})}function D(s,h){var g=R.Push,S=E(s,h);function y(){D(s,h)}if(U(g,S,y)){var w=K(S,f+1),M=w[0],O=w[1];try{r.pushState(M,"",O)}catch(Je){a.location.assign(O)}W(g)}}function I(s,h){var g=R.Replace,S=E(s,h);function y(){I(s,h)}if(U(g,S,y)){var w=K(S,f),M=w[0],O=w[1];r.replaceState(M,"",O),W(g)}}function B(s){r.go(s)}var ae={get action(){return u},get location(){return m},createHref:v,push:D,replace:I,go:B,back:function(){B(-1)},forward:function(){B(1)},listen:function(h){return P.push(h)},block:function(h){var g=d.push(h);return d.length===1&&a.addEventListener(A,G),function(){g(),d.length||a.removeEventListener(A,G)}}};return ae}function G(e){e.preventDefault(),e.returnValue=""}function q(){var e=[];return{get length(){return e.length},push:function(n){return e.push(n),function(){e=e.filter(function(a){return a!==n})}},call:function(n){e.forEach(function(a){return a&&a(n)})}}}function ie(){return Math.random().toString(36).substr(2,8)}function N(e){var t=e.pathname,n=t===void 0?"/":t,a=e.search,r=a===void 0?"":a,i=e.hash,l=i===void 0?"":i;return r&&r!=="?"&&(n+=r.charAt(0)==="?"?r:"?"+r),l&&l!=="#"&&(n+=l.charAt(0)==="#"?l:"#"+l),n}function k(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const _=c.createContext(null),H=c.createContext(null),$=c.createContext({outlet:null,matches:[]});function x(e,t){if(!e)throw new Error(t)}function oe(e,t,n){n===void 0&&(n="/");let a=typeof t=="string"?k(t):t,r=Z(a.pathname||"/",n);if(r==null)return null;let i=Q(e);se(i);let l=null;for(let o=0;l==null&&o<i.length;++o)l=ge(i[o],r);return l}function Q(e,t,n,a){return t===void 0&&(t=[]),n===void 0&&(n=[]),a===void 0&&(a=""),e.forEach((r,i)=>{let l={relativePath:r.path||"",caseSensitive:r.caseSensitive===!0,childrenIndex:i,route:r};l.relativePath.startsWith("/")&&(l.relativePath.startsWith(a)||x(!1),l.relativePath=l.relativePath.slice(a.length));let o=C([a,l.relativePath]),u=n.concat(l);r.children&&r.children.length>0&&(r.index===!0&&x(!1),Q(r.children,t,u,o)),!(r.path==null&&!r.index)&&t.push({path:o,score:de(o,r.index),routesMeta:u})}),t}function se(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ve(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}const ce=/^:\w+$/,ue=3,fe=2,he=1,pe=10,me=-2,X=e=>e==="*";function de(e,t){let n=e.split("/"),a=n.length;return n.some(X)&&(a+=me),t&&(a+=fe),n.filter(r=>!X(r)).reduce((r,i)=>r+(ce.test(i)?ue:i===""?he:pe),a)}function ve(e,t){return e.length===t.length&&e.slice(0,-1).every((a,r)=>a===t[r])?e[e.length-1]-t[t.length-1]:0}function ge(e,t){let{routesMeta:n}=e,a={},r="/",i=[];for(let l=0;l<n.length;++l){let o=n[l],u=l===n.length-1,p=r==="/"?t:t.slice(r.length)||"/",f=Pe({path:o.relativePath,caseSensitive:o.caseSensitive,end:u},p);if(!f)return null;Object.assign(a,f.params);let m=o.route;i.push({params:a,pathname:C([r,f.pathname]),pathnameBase:ee(C([r,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(r=C([r,f.pathnameBase]))}return i}function Pe(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=ye(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let i=r[0],l=i.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:a.reduce((p,f,m)=>{if(f==="*"){let P=o[m]||"";l=i.slice(0,i.length-P.length).replace(/(.)\/+$/,"$1")}return p[f]=xe(o[m]||""),p},{}),pathname:i,pathnameBase:l,pattern:e}}function ye(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0);let a=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(l,o)=>(a.push(o),"([^\\/]+)"));return e.endsWith("*")?(a.push("*"),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(r,t?void 0:"i"),a]}function xe(e,t){try{return decodeURIComponent(e)}catch(n){return e}}function Se(e,t){t===void 0&&(t="/");let{pathname:n,search:a="",hash:r=""}=typeof e=="string"?k(e):e;return{pathname:n?n.startsWith("/")?n:Ce(n,t):t,search:ke(a),hash:we(r)}}function Ce(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Y(e,t,n){let a=typeof e=="string"?k(e):e,r=e===""||a.pathname===""?"/":a.pathname,i;if(r==null)i=n;else{let o=t.length-1;if(r.startsWith("..")){let u=r.split("/");for(;u[0]==="..";)u.shift(),o-=1;a.pathname=u.join("/")}i=o>=0?t[o]:"/"}let l=Se(a,i);return r&&r!=="/"&&r.endsWith("/")&&!l.pathname.endsWith("/")&&(l.pathname+="/"),l}function Re(e){return e===""||e.pathname===""?"/":typeof e=="string"?k(e).pathname:e.pathname}function Z(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&n!=="/"?null:e.slice(t.length)||"/"}const C=e=>e.join("/").replace(/\/\/+/g,"/"),ee=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ke=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,we=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function be(e){b()||x(!1);let{basename:t,navigator:n}=c.useContext(_),{hash:a,pathname:r,search:i}=te(e),l=r;if(t!=="/"){let o=Re(e),u=o!=null&&o.endsWith("/");l=r==="/"?t+(u?"/":""):C([t,r])}return n.createHref({pathname:l,search:i,hash:a})}function b(){return c.useContext(H)!=null}function L(){return b()||x(!1),c.useContext(H).location}function j(){b()||x(!1);let{basename:e,navigator:t}=c.useContext(_),{matches:n}=c.useContext($),{pathname:a}=L(),r=JSON.stringify(n.map(o=>o.pathnameBase)),i=c.useRef(!1);return c.useEffect(()=>{i.current=!0}),c.useCallback(function(o,u){if(u===void 0&&(u={}),!i.current)return;if(typeof o=="number"){t.go(o);return}let p=Y(o,JSON.parse(r),a);e!=="/"&&(p.pathname=C([e,p.pathname])),(u.replace?t.replace:t.push)(p,u.state)},[e,t,r,a])}function Ee(){let{matches:e}=c.useContext($),t=e[e.length-1];return t?t.params:{}}function te(e){let{matches:t}=c.useContext($),{pathname:n}=L(),a=JSON.stringify(t.map(r=>r.pathnameBase));return c.useMemo(()=>Y(e,JSON.parse(a),n),[e,a,n])}function Be(e,t){b()||x(!1);let{matches:n}=c.useContext($),a=n[n.length-1],r=a?a.params:{},i=a?a.pathname:"/",l=a?a.pathnameBase:"/",o=a&&a.route,u=L(),p;if(t){var f;let v=typeof t=="string"?k(t):t;l==="/"||((f=v.pathname)==null?void 0:f.startsWith(l))||x(!1),p=v}else p=u;let m=p.pathname||"/",P=l==="/"?m:m.slice(l.length)||"/",d=oe(e,{pathname:P});return $e(d&&d.map(v=>Object.assign({},v,{params:Object.assign({},r,v.params),pathname:C([l,v.pathname]),pathnameBase:v.pathnameBase==="/"?l:C([l,v.pathnameBase])})),n)}function $e(e,t){return t===void 0&&(t=[]),e==null?null:e.reduceRight((n,a,r)=>c.createElement($.Provider,{children:a.route.element!==void 0?a.route.element:n,value:{outlet:n,matches:t.concat(e.slice(0,r+1))}}),null)}function Le(e){let{to:t,replace:n,state:a}=e;b()||x(!1);let r=j();return c.useEffect(()=>{r(t,{replace:n,state:a})}),null}function ne(e){x(!1)}function Oe(e){let{basename:t="/",children:n=null,location:a,navigationType:r=R.Pop,navigator:i,static:l=!1}=e;b()&&x(!1);let o=ee(t),u=c.useMemo(()=>({basename:o,navigator:i,static:l}),[o,i,l]);typeof a=="string"&&(a=k(a));let{pathname:p="/",search:f="",hash:m="",state:P=null,key:d="default"}=a,v=c.useMemo(()=>{let E=Z(p,o);return E==null?null:{pathname:E,search:f,hash:m,state:P,key:d}},[o,p,f,m,P,d]);return v==null?null:c.createElement(_.Provider,{value:u},c.createElement(H.Provider,{children:n,value:{location:v,navigationType:r}}))}function je(e){let{children:t,location:n}=e;return Be(T(t),n)}function T(e){let t=[];return c.Children.forEach(e,n=>{if(!c.isValidElement(n))return;if(n.type===c.Fragment){t.push.apply(t,T(n.props.children));return}n.type!==ne&&x(!1);let a={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(a.children=T(n.props.children)),t.push(a)}),t}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function V(){return V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},V.apply(this,arguments)}function We(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}const Me=["onClick","reloadDocument","replace","state","target","to"];function Ne(e){let{basename:t,children:n,window:a}=e,r=c.useRef();r.current==null&&(r.current=le({window:a}));let i=r.current,[l,o]=c.useState({action:i.action,location:i.location});return c.useLayoutEffect(()=>i.listen(o),[i]),c.createElement(Oe,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:i})}function _e(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const He=c.forwardRef(function(t,n){let{onClick:a,reloadDocument:r,replace:i=!1,state:l,target:o,to:u}=t,p=We(t,Me),f=be(u),m=Te(u,{replace:i,state:l,target:o});function P(d){a&&a(d),!d.defaultPrevented&&!r&&m(d)}return c.createElement("a",V({},p,{href:f,onClick:P,ref:n,target:o}))});function Te(e,t){let{target:n,replace:a,state:r}=t===void 0?{}:t,i=j(),l=L(),o=te(e);return c.useCallback(u=>{if(u.button===0&&(!n||n==="_self")&&!_e(u)){u.preventDefault();let p=!!a||N(l)===N(o);i(e,{replace:p,state:r})}},[l,i,o,a,r,n,e])}function Ve(e){let t=c.useRef(J(e)),n=L(),a=c.useMemo(()=>{let l=J(n.search);for(let o of t.current.keys())l.has(o)||t.current.getAll(o).forEach(u=>{l.append(o,u)});return l},[n.search]),r=j(),i=c.useCallback((l,o)=>{r("?"+J(l),o)},[r]);return[a,i]}function J(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let a=e[n];return t.concat(Array.isArray(a)?a.map(r=>[n,r]):[[n,a]])},[]))}export{Ne as BrowserRouter,He as Link,Le as Navigate,ne as Route,je as Routes,j as useNavigate,Ee as useParams,Ve as useSearchParams};
