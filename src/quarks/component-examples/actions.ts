import { fetchBranchInfo } from "../../adapters/github/fetch-branch-info";
import { fetchFromBranchTree } from "../../adapters/github/fetch-from-branch tree";
import type { GhApiBranchOrTag } from "../../adapters/github/fetch-repository-branch-list";
import { fetchTagInfo } from "../../adapters/github/fetch-tag-info";
import type { Examples } from "./examples";

export const examplesActions = {
  async setFromGithubBranch(
    _: Examples,
    branchName: string
  ): Promise<Examples> {
    try {
      const branchInfo = await fetchBranchInfo(branchName);

      const fileContent = await fetchFromBranchTree(
        branchInfo.commit.commit.tree.url,
        ["docs", "examples.json"]
      );

      if (fileContent.encoding !== "base64") {
        throw new Error("Unsupported encoding");
      }

      const ex: Examples = JSON.parse(atob(fileContent.content));

      return ex;
    } catch {
      return { components: {} };
    }
  },

  async setFromGithubTag(
    _: Examples,
    tag: GhApiBranchOrTag
  ): Promise<Examples> {
    try {
      const tagInfo = await fetchTagInfo(tag);

      const fileContent = await fetchFromBranchTree(tagInfo.commit.tree.url, [
        "docs",
        "examples.json",
      ]);

      if (fileContent.encoding !== "base64") {
        throw new Error("Unsupported encoding");
      }

      const ex: Examples = JSON.parse(atob(fileContent.content));

      return ex;
    } catch {
      return { components: {} };
    }
  },
};
