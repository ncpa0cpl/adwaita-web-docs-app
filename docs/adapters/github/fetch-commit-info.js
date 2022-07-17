import {Axios} from "../axios-instance.js";
export const fetchCommitInfo = async (branchOrTag) => {
  const commitInfo = await Axios.get(branchOrTag.commit.url);
  return commitInfo.data;
};
