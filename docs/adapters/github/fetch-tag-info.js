import {Axios} from "../axios-instance.js";
export const fetchTagInfo = async (tag) => {
  const commitInfo = await Axios.get(tag.commit.url);
  return commitInfo.data;
};
