import { quark } from "react-quarks";
import type { GhApiCommitInfo } from "../../adapters/github/fetch-commit-info";
import type { GhApiBranchOrTag } from "../../adapters/github/fetch-repository-branch-list";
import { githubRepoActions } from "./actions";
import { githubRepoSelectors } from "./selectors";

export type GithubRepo = {
  branches: GhApiBranchOrTag[];
  currentBranch: string;
  currentCommit?: GhApiCommitInfo;
};

export const githubRepo = quark(
  {
    branches: [],
    currentBranch: "",
    currentCommit: undefined,
  } as GithubRepo,
  {
    actions: githubRepoActions,
    selectors: githubRepoSelectors,
  }
);
