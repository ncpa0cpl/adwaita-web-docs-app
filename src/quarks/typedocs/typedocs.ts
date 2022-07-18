import type { JSONSchema4 } from "json-schema";
import { quark } from "react-quarks";
import { githubRepo } from "../github-repo/github-repo";
import { typeDocsActions } from "./actions";
import { typeDocsSelectors } from "./selectors";

export type TypeDocsComponentInfo = {
  description: string;
  propsSources: Array<{
    fileName: string;
    line: number;
    character: number;
  }>;
  propsSchema: JSONSchema4;
};

export type TypeDocs = {
  components: Array<[name: string, Component: TypeDocsComponentInfo]>;
};

export const typeDocs = quark({ components: [] } as TypeDocs, {
  actions: typeDocsActions,
  selectors: typeDocsSelectors,
});

githubRepo.subscribe((state) => {
  if (state.currentBranch) {
    const branch = state.branches.find((b) => b.name === state.currentBranch)!;

    if (branch.type === "tag") {
      typeDocs.setFromGithubTag(branch);
    } else {
      typeDocs.setFromGithubBranch(branch.name);
    }
  }
});
