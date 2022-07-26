import {quark} from "../../_snowpack/pkg/react-quarks.v2.0.2.js";
import {githubRepoActions} from "./actions.js";
import {githubRepoSelectors} from "./selectors.js";
export const githubRepo = quark({
  branches: [],
  currentBranch: ""
}, {
  actions: githubRepoActions,
  selectors: githubRepoSelectors
});
