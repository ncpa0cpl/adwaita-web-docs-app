import { Axios } from "../axios-instance";
import type { GhApiCommitFileInfo } from "./fetch-commit-info";

export const fetchFileContent = async (file: GhApiCommitFileInfo) => {
  const fileContent = await Axios.get<{ content: string; encoding: string }>(
    file.contents_url
  );

  if (fileContent.data.encoding !== "base64") {
    throw new Error(`Unsupported encoding: ${fileContent.data.encoding}`);
  }

  return atob(fileContent.data.content);
};
