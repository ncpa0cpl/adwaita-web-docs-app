import { quark } from "react-quarks";
import { githubRepo } from "../github-repo/github-repo";
import { examplesActions } from "./actions";
import { exampleSelectors } from "./selectors";

export type Examples = {
  components: Record<string, string>;
};

export const examples = quark(
  {
    components: {},
  } as Examples,
  { actions: examplesActions, selectors: exampleSelectors }
);

githubRepo.subscribe((state) => {
  if (state.currentBranch) {
    const branch = state.branches.find((b) => b.name === state.currentBranch)!;

    if (branch.type === "tag") {
      examples.setFromGithubTag(branch);
    } else {
      examples.setFromGithubBranch(branch.name);
    }
  }
});
