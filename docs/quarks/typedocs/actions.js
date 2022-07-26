import {fetchBranchInfo} from "../../adapters/github/fetch-branch-info.js";
import {fetchFromBranchTree} from "../../adapters/github/fetch-from-branch tree.js";
import {fetchTagInfo} from "../../adapters/github/fetch-tag-info.js";
export const typeDocsActions = {
  async setFromGithubBranch(_, branchName) {
    try {
      const branchInfo = await fetchBranchInfo(branchName);
      const fileContent = await fetchFromBranchTree(branchInfo.commit.commit.tree.url, ["docs", "typedocs.json"]);
      if (fileContent.encoding !== "base64") {
        throw new Error("Unsupported encoding");
      }
      const typedocs = JSON.parse(atob(fileContent.content));
      return {
        components: Object.entries(typedocs.components)
      };
    } catch {
      return {components: []};
    }
  },
  async setFromGithubTag(_, tag) {
    try {
      const tagInfo = await fetchTagInfo(tag);
      const fileContent = await fetchFromBranchTree(tagInfo.commit.tree.url, [
        "docs",
        "typedocs.json"
      ]);
      if (fileContent.encoding !== "base64") {
        throw new Error("Unsupported encoding");
      }
      const typedocs = JSON.parse(atob(fileContent.content));
      return {
        components: Object.entries(typedocs.components)
      };
    } catch {
      return {components: []};
    }
  }
};
