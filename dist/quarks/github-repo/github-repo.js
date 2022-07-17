import {quark} from "../../_snowpack/pkg/react-quarks.js";
import {githubRepoActions} from "./actions.js";
import {githubRepoSelectors} from "./selectors.js";
export const githubRepo = quark({
  branches: [],
  currentBranch: "",
  currentCommit: void 0
}, {
  actions: githubRepoActions,
  selectors: githubRepoSelectors
});
