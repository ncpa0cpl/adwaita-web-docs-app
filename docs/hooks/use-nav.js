import {useNavigate, useSearchParams} from "../_snowpack/pkg/react-router-dom.v6.3.0.js";
export const useNav = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const getTarget = (to, preserveQuery) => {
    if (preserveQuery) {
      if (typeof to === "string") {
        return `${to}?${searchParams.toString()}`;
      } else {
        return {...to, search: searchParams.toString()};
      }
    }
    return to;
  };
  return (to, options) => {
    const {preserveQuery, ...rest} = options ?? {};
    return navigate(getTarget(to, preserveQuery), rest);
  };
};
