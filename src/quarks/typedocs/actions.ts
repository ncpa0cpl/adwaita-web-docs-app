import { fetchBranchInfo } from "../../adapters/github/fetch-branch-info";
import { fetchFromBranchTree } from "../../adapters/github/fetch-from-branch tree";
import type { GhApiBranchOrTag } from "../../adapters/github/fetch-repository-branch-list";
import { fetchTagInfo } from "../../adapters/github/fetch-tag-info";
import type { TypeDocs, TypeDocsComponentInfo } from "./typedocs";

export const typeDocsActions = {
  async setFromGithubBranch(
    _: TypeDocs,
    branchName: string
  ): Promise<TypeDocs> {
    type TypeDocsJson = {
      components: Record<string, TypeDocsComponentInfo>;
    };

    const branchInfo = await fetchBranchInfo(branchName);

    const fileContent = await fetchFromBranchTree(
      branchInfo.commit.commit.tree.url,
      ["docs", "typedocs.json"]
    );

    if (fileContent.encoding !== "base64") {
      throw new Error("Unsupported encoding");
    }

    const typedocs: TypeDocsJson = JSON.parse(atob(fileContent.content));

    return {
      components: Object.entries(typedocs.components),
    };
  },

  async setFromGithubTag(
    _: TypeDocs,
    tag: GhApiBranchOrTag
  ): Promise<TypeDocs> {
    type TypeDocsJson = {
      components: Record<string, TypeDocsComponentInfo>;
    };

    const tagInfo = await fetchTagInfo(tag);

    const fileContent = await fetchFromBranchTree(tagInfo.commit.tree.url, [
      "docs",
      "typedocs.json",
    ]);

    if (fileContent.encoding !== "base64") {
      throw new Error("Unsupported encoding");
    }

    const typedocs: TypeDocsJson = JSON.parse(atob(fileContent.content));

    return {
      components: Object.entries(typedocs.components),
    };
  },
};
