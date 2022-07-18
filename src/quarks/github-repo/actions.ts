import { fetchRepositoryBranchList } from "../../adapters/github/fetch-repository-branch-list";
import { sortTagAndBranches } from "../../helpers/sort-tag-and-branches";
import type { GithubRepo } from "./github-repo";

export const githubRepoActions = {
  async updateBranchList(): Promise<GithubRepo> {
    const branches = await fetchRepositoryBranchList();
    const sortedBranches = sortTagAndBranches(branches, (branch) => branch);

    const branchName = branches.length ? branches[0]!.name : "";

    return {
      branches: sortedBranches,
      currentBranch: branchName,
    };
  },

  async selectBranch(
    state: GithubRepo,
    branchName: string
  ): Promise<GithubRepo> {
    const branch = state.branches.find((b) => b.name === branchName);

    if (!branch) {
      throw new Error(`Branch ${branchName} not found`);
    }

    return {
      ...state,
      currentBranch: branchName,
    };
  },
};
