import {Axios} from "../axios-instance.js";
import {GH_API_BASE_URL, REPO_NAME, REPO_OWNER} from "./constants.js";
export const fetchBranchInfo = async (branchName) => {
  const commitInfo = await Axios.get(`/repos/${REPO_OWNER}/${REPO_NAME}/branches/${branchName}`, {
    baseURL: GH_API_BASE_URL
  });
  return commitInfo.data;
};
