import React from "react";

export const withWrapper = <P,>(
  applyWrapper: (children: JSX.Element) => JSX.Element,
  Component: React.ComponentType<P>
) => {
  return (props: React.PropsWithChildren<P>) => {
    return applyWrapper(<Component {...props} />);
  };
};
