import { Text } from "adwaita-web";
import clsx from "clsx";
import path from "path-browserify";
import React from "react";
import { REPO_NAME, REPO_OWNER } from "../../../adapters/github/constants";
import { githubRepo } from "../../../quarks/github-repo/github-repo";
import type { Text as MDText } from "../../../utilities/example-markdown-parser/text";
import { Link } from "../../link/link";

export type TextViewerProps = {
  text: MDText;
  isPartOfGroup?: boolean;
};

export const TextViewer = (props: TextViewerProps) => {
  const classes = clsx({
    bolded: props.text.isBold,
    italic: props.text.isItalic,
    striked: props.text.isStrike,
    "code-quote": props.text.isCode,
  });

  const renderText = () => {
    if (props.text.isLink && props.text.linkHref) {
      const link = resolveHref(props.text.linkHref);
      if (!link.isExternal) {
        return (
          <Link to={link.href} preserveQuery>
            {props.text.value}
          </Link>
        );
      }
      return <a href={link.href}>{props.text.value}</a>;
    }
    return props.text.value;
  };

  if (props.text.header !== undefined) {
    const H = `h${props.text.header}` as
      | "h1"
      | "h2"
      | "h3"
      | "h4"
      | "h5"
      | "h6";
    return <H className={classes}>{renderText()}</H>;
  }

  if (props.isPartOfGroup)
    return <span className={classes}>{renderText()}</span>;
  return <Text className={classes}>{renderText()}</Text>;
};

type ParsedHref = {
  href: string;
  isExternal: boolean;
};

const resolveHref = (href: string): ParsedHref => {
  if (href.startsWith("http")) return { href, isExternal: true };

  const base = `https://github.com/${REPO_OWNER}/${REPO_NAME}/tree/${
    githubRepo.get().currentBranch
  }`;
  const match = href.match(/^\.\/([a-zA-Z0-9]+)\.md$/);
  if (match && match[1]) {
    const componentName = match[1];
    return { href: `/${componentName}`, isExternal: false };
  }
  if (href.startsWith(".")) {
    const dir = path.join("/docs", href);
    return {
      href: `${base}${dir}`,
      isExternal: true,
    };
  }
  if (href.startsWith("/")) {
    const dir = path.join("/", href);
    return {
      href: `${base}${dir}`,
      isExternal: true,
    };
  }

  return { href, isExternal: true };
};
