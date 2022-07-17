import {Axios} from "../axios-instance.js";
export const fetchFileContent = async (file) => {
  const fileContent = await Axios.get(file.contents_url);
  if (fileContent.data.encoding !== "base64") {
    throw new Error(`Unsupported encoding: ${fileContent.data.encoding}`);
  }
  return atob(fileContent.data.content);
};
