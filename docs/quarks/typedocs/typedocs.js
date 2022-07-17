import {quark} from "../../_snowpack/pkg/react-quarks.js";
import {githubRepo} from "../github-repo/github-repo.js";
import {typeDocsActions} from "./actions.js";
import {typeDocsSelectors} from "./selectors.js";
export const typeDocs = quark({components: []}, {
  actions: typeDocsActions,
  selectors: typeDocsSelectors
});
githubRepo.subscribe((state) => {
  if (state.currentCommit) {
    const typedocCommitFile = state.currentCommit.files.find((file) => file.filename === "docs/typedocs.json");
    if (typedocCommitFile) {
      typeDocs.setFromRemoteFile(typedocCommitFile);
    }
  }
});
