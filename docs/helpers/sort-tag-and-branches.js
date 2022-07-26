import {sortAlphanumeric} from "./sort-alphanum.js";
export const sortTagAndBranches = (list, getTagOrBranch) => {
  const tags = list.filter((elem) => getTagOrBranch(elem).type === "tag");
  const branches = list.filter((elem) => getTagOrBranch(elem).type === "branch");
  const sortedTags = sortAlphanumeric(tags, (tag) => getTagOrBranch(tag).name).reverse();
  const sortedBranches = sortAlphanumeric(branches, (branch) => getTagOrBranch(branch).name);
  return [...sortedTags, ...sortedBranches];
};
