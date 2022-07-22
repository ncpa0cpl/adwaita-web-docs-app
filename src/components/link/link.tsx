import React from "react";
import type { LinkProps } from "react-router-dom";
import { Link as RRLink, useSearchParams } from "react-router-dom";

export const Link = (props: LinkProps & { preserveQuery?: boolean }) => {
  const { preserveQuery, to, ...rest } = props;
  const [searchParams] = useSearchParams();

  const target = React.useMemo(() => {
    if (preserveQuery) {
      if (typeof to === "string") {
        return `${to}?${searchParams.toString()}`;
      } else {
        return { ...to, search: searchParams.toString() };
      }
    }
    return to;
  }, [to, searchParams]);

  return <RRLink {...rest} to={target} />;
};
