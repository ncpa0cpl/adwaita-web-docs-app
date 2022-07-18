import type { GhApiBranchOrTag } from "../adapters/github/fetch-repository-branch-list";
import { sortAlphanumeric } from "./sort-alphanum";

export const sortTagAndBranches = <T>(
  list: T[],
  getTagOrBranch: (elem: T) => GhApiBranchOrTag
): T[] => {
  const tags = list.filter((elem) => getTagOrBranch(elem).type === "tag");
  const branches = list.filter(
    (elem) => getTagOrBranch(elem).type === "branch"
  );

  const sortedTags = sortAlphanumeric(
    tags,
    (tag) => getTagOrBranch(tag).name
  ).reverse();
  const sortedBranches = sortAlphanumeric(
    branches,
    (branch) => getTagOrBranch(branch).name
  );

  return [...sortedTags, ...sortedBranches];
};
