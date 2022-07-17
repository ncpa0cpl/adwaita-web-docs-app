import React from "react";

export function highlight(
  className: string,
  text: string,
  positions: number[]
) {
  const elements = [];

  let lastPosition = 0;
  let i = 0;
  for (; i < positions.length; i++) {
    const start = positions[i] ?? 0;
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
    elements.push(
      <span key={i} className={className}>
        {text.slice(start, end)}
      </span>
    );
    lastPosition = end;
  }
  elements.push(text.slice(lastPosition));

  return elements.filter(Boolean);
}
