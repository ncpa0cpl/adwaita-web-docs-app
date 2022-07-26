import {quark} from "../../_snowpack/pkg/react-quarks.v2.0.2.js";
import {githubRepo} from "../github-repo/github-repo.js";
import {typeDocsActions} from "./actions.js";
import {typeDocsSelectors} from "./selectors.js";
export const typeDocs = quark({components: []}, {
  actions: typeDocsActions,
  selectors: typeDocsSelectors
});
githubRepo.subscribe((state) => {
  if (state.currentBranch) {
    const branch = state.branches.find((b) => b.name === state.currentBranch);
    if (branch.type === "tag") {
      typeDocs.setFromGithubTag(branch);
    } else {
      typeDocs.setFromGithubBranch(branch.name);
    }
  }
});
