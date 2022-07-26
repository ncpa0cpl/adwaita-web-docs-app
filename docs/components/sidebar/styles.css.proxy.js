// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".sidebar-root {\n  width: 100%;\n  height: 100%;\n}\n.sidebar-root .mark {\n  background-color: #ffd54f;\n}\n.sidebar-root .list {\n  flex: 1;\n  overflow: auto;\n}\n.sidebar-root .component-link .Label {\n  padding-left: 10px;\n}\n.sidebar-root .component-link:hover {\n  cursor: pointer;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}