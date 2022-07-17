import compare from "natural-compare";

export const sortAlphanumeric = <T>(
  list: T[],
  getComparableStr: (elem: T) => string
) => {
  return list.sort((a, b) => compare(getComparableStr(a), getComparableStr(b)));
};
