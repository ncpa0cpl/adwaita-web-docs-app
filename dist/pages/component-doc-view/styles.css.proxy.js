if (typeof document !== "undefined") {
  const code = ".source-link {\n  margin-left: 15px;\n}";
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = "text/css";
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}
