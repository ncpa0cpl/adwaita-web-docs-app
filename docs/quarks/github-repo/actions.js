import {fetchRepositoryBranchList} from "../../adapters/github/fetch-repository-branch-list.js";
import {sortTagAndBranches} from "../../helpers/sort-tag-and-branches.js";
export const githubRepoActions = {
  async updateBranchList() {
    const branches = await fetchRepositoryBranchList();
    const sortedBranches = sortTagAndBranches(branches, (branch) => branch);
    const branchName = branches.length ? branches[0].name : "";
    return {
      branches: sortedBranches,
      currentBranch: branchName
    };
  },
  async selectBranch(state, branchName) {
    const branch = state.branches.find((b) => b.name === branchName);
    if (!branch) {
      throw new Error(`Branch ${branchName} not found`);
    }
    return {
      ...state,
      currentBranch: branchName
    };
  }
};
