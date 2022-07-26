import compare from "../_snowpack/pkg/natural-compare.v1.4.0.js";
export const sortAlphanumeric = (list, getComparableStr) => {
  return list.sort((a, b) => compare(getComparableStr(a), getComparableStr(b)));
};
