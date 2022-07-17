import cx from "clsx";
import React from "react";
import { REPO_NAME, REPO_OWNER } from "../../adapters/github/constants";
import { GithubCorner } from "../github-corner/github-corner";
import "./styles.scss";

export function Content({
  className,
  children,
  ...props
}: JSX.IntrinsicElements["div"]) {
  return (
    <div className={cx(className, "content-root")} {...props}>
      <GithubCorner
        className={"content-link"}
        url={`https://github.com/${REPO_OWNER}/${REPO_NAME}`}
      />
      {children}
    </div>
  );
}
