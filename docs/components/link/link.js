import React from "../../_snowpack/pkg/react.v18.2.0.js";
import {Link as RRLink, useSearchParams} from "../../_snowpack/pkg/react-router-dom.v6.3.0.js";
export const Link = (props) => {
  const {preserveQuery, to, ...rest} = props;
  const [searchParams] = useSearchParams();
  const target = React.useMemo(() => {
    if (preserveQuery) {
      if (typeof to === "string") {
        return `${to}?${searchParams.toString()}`;
      } else {
        return {...to, search: searchParams.toString()};
      }
    }
    return to;
  }, [to, searchParams]);
  return /* @__PURE__ */ React.createElement(RRLink, {
    ...rest,
    to: target
  });
};
