// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "html, body, #root {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.App {\n  width: 100%;\n  height: 100%;\n}\n\n.Popover__content {\n  min-width: 40px;\n  min-height: 7px;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}