import type { GhApiCommitFileInfo } from "../../adapters/github/fetch-commit-info";
import { fetchFileContent } from "../../adapters/github/fetch-file-content";
import type { TypeDocs, TypeDocsComponentInfo } from "./typedocs";

export const typeDocsActions = {
  async setFromRemoteFile(
    _: TypeDocs,
    remoteFile: GhApiCommitFileInfo
  ): Promise<TypeDocs> {
    type TypeDocsJson = {
      components: Record<string, TypeDocsComponentInfo>;
    };

    const fileContent = await fetchFileContent(remoteFile);
    const typedocs: TypeDocsJson = JSON.parse(fileContent);

    return {
      components: Object.entries(typedocs.components),
    };
  },
};
