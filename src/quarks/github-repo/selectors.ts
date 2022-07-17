import type { GithubRepo } from "./github-repo";

export const githubRepoSelectors = {
  useBranchName(state: GithubRepo) {
    return state.currentBranch;
  },
};
