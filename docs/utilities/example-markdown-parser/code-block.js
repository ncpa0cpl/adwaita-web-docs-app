import{v4 as c}from"../../_snowpack/pkg/uuid.js";export class CodeBlock{constructor(e){this.code=e,this.id=c(),this.type="code-block"}parseMetadata(e){const s=new Map;for(const t of e){const n=t.match(/\s*([^@]+)@([^\s]+)\s*/);n&&n[1]&&n[2]&&s.set(n[1],n[2])}return s}resolveDependencyVersion(e,s){return e.has(s)?e.get(s):"latest"}getCode(){const e=this.code.split(`
`);let s=0;for(const t of e)if(t.startsWith("//"))s++;else break;return e.slice(s).join(`
`)}getDependencies(){const e=this.code.split(`
`),s=[];for(const o of e)if(o.startsWith("//"))s.push(o.slice(2).trim());else break;const t=[],n=/import\s+.+?\s+from\s+['"](.+?)['"]/gms;let i;for(;(i=n.exec(this.code))!==null;)i[1]&&t.push(i[1]);const r=this.parseMetadata(s);for(const o of r)t.includes(o[0])||t.push(o[0]);return t.map(o=>({package:o,version:this.resolveDependencyVersion(r,o)}))}}
