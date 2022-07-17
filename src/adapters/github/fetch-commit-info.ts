import { Axios } from "../axios-instance";
import type { GhApiBranchOrTag } from "./fetch-repository-branch-list";

export type GhApiCommitFileInfo = {
  filename: string;
  raw_url: string;
  contents_url: string;
};

export type GhApiCommitInfo = {
  files: GhApiCommitFileInfo[];
};

export const fetchCommitInfo = async (branchOrTag: GhApiBranchOrTag) => {
  const commitInfo = await Axios.get<GhApiCommitInfo>(branchOrTag.commit.url);

  return commitInfo.data;
};
