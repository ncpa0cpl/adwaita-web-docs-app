import React from "react";

const NAMED_LINK_REGX = /\{@link\s(.*?)\s(.*?)}/;
const LINK_REGX = /{@link (.*?)}/;
const ANY_LINK_REGX = /{@link .*?}/;

const Fragment = ({ children }: React.PropsWithChildren) => <>{children}</>;

export const interpolateJSDocLinks = (text: string): React.ReactNode => {
  if (!ANY_LINK_REGX.test(text)) {
    return text;
  }

  const nodes: Array<string | React.ReactNode> = text
    .split(ANY_LINK_REGX)
    .filter((elem) => elem != null && !ANY_LINK_REGX.test(elem));
  const links = text.match(new RegExp(LINK_REGX, "g"));

  if (links) {
    let i = 1;

    for (const link of links) {
      // if link is named
      if (NAMED_LINK_REGX.test(link)) {
        const [, href, name] = link.match(NAMED_LINK_REGX)!;
        nodes.splice(
          i,
          0,
          <a target="_blank" href={href}>
            {name}
          </a>
        );
        i += 3;
      } else {
        const [, href] = link.match(LINK_REGX)!;
        nodes.splice(
          i,
          0,
          <a target="_blank" href={href}>
            {href}
          </a>
        );
        i += 3;
      }
    }
  }

  return nodes.map((part, index) => <Fragment key={index}>{part}</Fragment>);
};
