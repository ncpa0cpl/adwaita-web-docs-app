import { Axios } from "../axios-instance";
import { GH_API_BASE_URL, REPO_NAME, REPO_OWNER } from "./constants";

export type GhApiBranchInfo = {
  commit: {
    commit: {
      tree: {
        url: string;
      };
    };
  };
};

export const fetchBranchInfo = async (branchName: string) => {
  const commitInfo = await Axios.get<GhApiBranchInfo>(
    `/repos/${REPO_OWNER}/${REPO_NAME}/branches/${branchName}`,
    {
      baseURL: GH_API_BASE_URL,
    }
  );

  return commitInfo.data;
};
