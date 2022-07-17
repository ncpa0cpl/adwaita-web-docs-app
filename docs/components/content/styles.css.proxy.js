if (typeof document !== "undefined") {
  const code = ".content-root {\n  position: relative;\n  padding: 2rem;\n}\n.content-root .content-link {\n  position: absolute;\n  top: 0;\n  right: 0;\n}";
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = "text/css";
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}
