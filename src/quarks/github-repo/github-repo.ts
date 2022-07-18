import { quark } from "react-quarks";
import type { GhApiBranchOrTag } from "../../adapters/github/fetch-repository-branch-list";
import { githubRepoActions } from "./actions";
import { githubRepoSelectors } from "./selectors";

export type GithubRepo = {
  branches: GhApiBranchOrTag[];
  currentBranch: string;
};

export const githubRepo = quark(
  {
    branches: [],
    currentBranch: "",
  } as GithubRepo,
  {
    actions: githubRepoActions,
    selectors: githubRepoSelectors,
  }
);
