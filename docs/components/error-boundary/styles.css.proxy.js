// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".error-boundary {\n  font-size: 18;\n  line-height: 1.5;\n}\n.error-boundary a {\n  color: inherit;\n  font-weight: bold;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}