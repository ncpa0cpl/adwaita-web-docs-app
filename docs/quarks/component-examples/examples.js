import {quark} from "../../_snowpack/pkg/react-quarks.v2.0.2.js";
import {githubRepo} from "../github-repo/github-repo.js";
import {examplesActions} from "./actions.js";
import {exampleSelectors} from "./selectors.js";
export const examples = quark({
  components: {}
}, {actions: examplesActions, selectors: exampleSelectors});
githubRepo.subscribe((state) => {
  if (state.currentBranch) {
    const branch = state.branches.find((b) => b.name === state.currentBranch);
    if (branch.type === "tag") {
      examples.setFromGithubTag(branch);
    } else {
      examples.setFromGithubBranch(branch.name);
    }
  }
});
