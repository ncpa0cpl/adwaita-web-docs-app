import cx from "clsx";
import React from "react";
import "./styles.scss";

export function Main({
  className,
  children,
  ...props
}: JSX.IntrinsicElements["div"]) {
  return (
    <div id="main" className={cx(className)} {...props}>
      {children}
    </div>
  );
}
