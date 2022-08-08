import React from "react";

const PROVIDERS: Array<({ children }: React.PropsWithChildren) => JSX.Element> =
  [];

export const applyProviders = (children: JSX.Element) => {
  return PROVIDERS.reduceRight(
    (children, Provider) => <Provider>{children}</Provider>,
    children
  );
};
