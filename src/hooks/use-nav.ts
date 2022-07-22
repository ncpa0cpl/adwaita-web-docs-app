import type { NavigateOptions, To } from "react-router-dom";
import { useNavigate, useSearchParams } from "react-router-dom";

export const useNav = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const getTarget = (to: To, preserveQuery?: boolean) => {
    if (preserveQuery) {
      if (typeof to === "string") {
        return `${to}?${searchParams.toString()}`;
      } else {
        return { ...to, search: searchParams.toString() };
      }
    }
    return to;
  };

  return (to: To, options?: NavigateOptions & { preserveQuery: boolean }) => {
    const { preserveQuery, ...rest } = options ?? {};
    return navigate(getTarget(to, preserveQuery), rest);
  };
};
