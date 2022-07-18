import { Axios } from "../axios-instance";
import type { GhApiBranchOrTag } from "./fetch-repository-branch-list";

export type GhApiTagInfo = {
  commit: {
    tree: {
      url: string;
    };
  };
};

export const fetchTagInfo = async (tag: GhApiBranchOrTag) => {
  const commitInfo = await Axios.get<GhApiTagInfo>(tag.commit.url);

  return commitInfo.data;
};
