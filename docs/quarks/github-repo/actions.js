var __defProp = Object.defineProperty;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __assign = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import {fetchCommitInfo} from "../../adapters/github/fetch-commit-info.js";
import {fetchRepositoryBranchList} from "../../adapters/github/fetch-repository-branch-list.js";
import {sortAlphanumeric} from "../../helpers/sort-alphanum.js";
export const githubRepoActions = {
  async updateBranchList() {
    const branches = await fetchRepositoryBranchList();
    const sortedBranches = sortAlphanumeric(branches, (branch) => branch.name);
    const branchName = branches.length ? branches[0].name : "";
    let currentCommit;
    if (branchName) {
      const branch = sortedBranches.find((b) => b.name === branchName);
      currentCommit = await fetchCommitInfo(branch);
    }
    return {
      branches: sortedBranches,
      currentBranch: branchName,
      currentCommit
    };
  },
  async selectBranch(state, branchName) {
    const branch = state.branches.find((b) => b.name === branchName);
    if (!branch) {
      throw new Error(`Branch ${branchName} not found`);
    }
    const commitInfo = await fetchCommitInfo(branch);
    return __assign(__assign({}, state), {
      currentBranch: branchName,
      currentCommit: commitInfo
    });
  }
};
