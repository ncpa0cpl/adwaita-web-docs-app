import React from "../../_snowpack/pkg/react.js";
export function highlight(className, text, positions) {
  var _a;
  const elements = [];
  let lastPosition = 0;
  let i = 0;
  for (; i < positions.length; i++) {
    const start = (_a = positions[i]) != null ? _a : 0;
    let end = start + 1;
    while (i < positions.length) {
      if (positions[i + 1] === end) {
        i++;
        end++;
        continue;
      }
      break;
    }
    elements.push(text.slice(lastPosition, start));
    elements.push(/* @__PURE__ */ React.createElement("span", {
      key: i,
      className
    }, text.slice(start, end)));
    lastPosition = end;
  }
  elements.push(text.slice(lastPosition));
  return elements.filter(Boolean);
}