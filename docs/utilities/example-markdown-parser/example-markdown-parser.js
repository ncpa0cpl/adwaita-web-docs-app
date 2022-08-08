import c from"../../_snowpack/pkg/remark-gfm.js";import d from"../../_snowpack/pkg/remark-parse.js";import{unified as h}from"../../_snowpack/pkg/unified.js";import{Blockquote as m}from"./blockquote.js";import{CodeBlock as u}from"./code-block.js";import{Example as k}from"./example.js";import{List as f}from"./list.js";import{ListElement as p}from"./list-element.js";import{Text as l}from"./text.js";import{TextGroup as g}from"./text-group.js";export class ExampleMarkdownParser{constructor(r){this.markdown=r}async parseToAst(){this.ast=await h().use(d).use(c).parse(this.markdown)}splitChildrenByHeadings(){return this.ast.children.reduce((r,o)=>{var e;return o.type==="heading"&&o.depth===1?(r.push({header:o,elements:[]}),r):((e=r[r.length-1])==null||e.elements.push(o),r)},[])}getTextFrom(r){return r.reduce((o,e)=>(e.type==="text"&&o.push(e.value),o),[]).join("")}getParagraphText(r){const o=r.reduce((e,n)=>{switch(n.type){case"text":e.push(new l(n.value));break;case"strong":{const t=new l(this.getTextFrom(n.children));t.setType("bold"),e.push(t);break}case"delete":{const t=new l(this.getTextFrom(n.children));t.setType("strike"),e.push(t);break}case"emphasis":{const t=new l(this.getTextFrom(n.children));t.setType("italic"),e.push(t);break}case"link":{const t=new l(this.getTextFrom(n.children));t.setType("link"),t.setHref(n.url),e.push(t);break}case"inlineCode":{const t=new l(n.value);t.setType("code"),e.push(t);break}default:break}return e},[]);return new g(o)}getList(r){const o=r.reduce((n,t)=>{if(t.type==="listItem"){for(const s of t.children)if(s.type==="paragraph"){const i=this.getParagraphText(s.children),a=new p("text");a.addText(i),n.push(a)}else if(s.type==="list"){const i=this.getList(s.children),a=new p("nested-list");a.addNestedList(i),n.push(a)}else if(s.type==="blockquote"){const i=this.getBlockquote(s.children),a=new p("text");a.addText(i),n.push(a)}}return n},[]),e=new f;return e.addElement(...o),e}getBlockquote(r){const o=new m;for(const e of r)e.type==="paragraph"?o.addElement(this.getParagraphText(e.children)):e.type==="list"?o.addElement(this.getList(e.children)):e.type==="blockquote"&&o.addElement(this.getBlockquote(e.children));return o}async parse(){const r=[];await this.parseToAst();const o=this.splitChildrenByHeadings();for(const e of o){const n=this.getTextFrom(e.header.children),t=new k(n);for(const s of e.elements)if(s.type==="code"&&["tsx","jsx","js","ts"].includes(s.lang))t.addCodeBlock(new u(s.value));else if(s.type==="paragraph")t.addDescriptionBlock(this.getParagraphText(s.children));else if(s.type==="list")t.addDescriptionBlock(this.getList(s.children));else if(s.type==="blockquote")t.addDescriptionBlock(this.getBlockquote(s.children));else if(s.type==="heading"){const i=new l(this.getTextFrom(s.children));i.setAsHeader(s.depth),t.addDescriptionBlock(i)}r.push(t)}return r}}
