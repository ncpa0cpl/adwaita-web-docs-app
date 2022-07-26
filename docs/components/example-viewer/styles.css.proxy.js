// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".component-example {\n  margin-bottom: 60px;\n}\n.component-example .example-description {\n  margin-bottom: 35px;\n}\n.component-example .example-description .text-group {\n  margin-bottom: 0.5em;\n  display: flex;\n  flex-direction: row;\n  height: 22px;\n  align-items: center;\n}\n.component-example .example-description .text-group > span {\n  white-space: pre;\n}\n.component-example .example-description .bolded {\n  font-weight: bold;\n}\n.component-example .example-description .italic {\n  font-style: italic;\n}\n.component-example .example-description .striked {\n  text-decoration: line-through;\n}\n.component-example .example-description .code-quote {\n  font-family: monospace;\n  background-color: rgb(208, 208, 208);\n  color: rgb(94, 94, 94);\n  padding: 1px 4px;\n  border-radius: 3px;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}