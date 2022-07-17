import type { GhApiCommitInfo } from "../../adapters/github/fetch-commit-info";
import { fetchCommitInfo } from "../../adapters/github/fetch-commit-info";
import { fetchRepositoryBranchList } from "../../adapters/github/fetch-repository-branch-list";
import { sortAlphanumeric } from "../../helpers/sort-alphanum";
import type { GithubRepo } from "./github-repo";

export const githubRepoActions = {
  async updateBranchList(): Promise<GithubRepo> {
    const branches = await fetchRepositoryBranchList();
    const sortedBranches = sortAlphanumeric(branches, (branch) => branch.name);

    const branchName = branches.length ? branches[0]!.name : "";

    let currentCommit: GhApiCommitInfo | undefined;
    if (branchName) {
      const branch = sortedBranches.find((b) => b.name === branchName);
      currentCommit = await fetchCommitInfo(branch!);
    }

    return {
      branches: sortedBranches,
      currentBranch: branchName,
      currentCommit,
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

    const commitInfo = await fetchCommitInfo(branch);

    return {
      ...state,
      currentBranch: branchName,
      currentCommit: commitInfo,
    };
  },
};
