import compare from "../_snowpack/pkg/natural-compare.js";
export const sortAlphanumeric = (list, getComparableStr) => {
  return list.sort((a, b) => compare(getComparableStr(a), getComparableStr(b)));
};
