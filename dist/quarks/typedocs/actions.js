import {fetchFileContent} from "../../adapters/github/fetch-file-content.js";
export const typeDocsActions = {
  async setFromRemoteFile(_, remoteFile) {
    const fileContent = await fetchFileContent(remoteFile);
    const typedocs = JSON.parse(fileContent);
    return {
      components: Object.entries(typedocs.components)
    };
  }
};
