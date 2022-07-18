import { Axios } from "../axios-instance";
import { GH_API_BASE_URL, REPO_NAME, REPO_OWNER } from "./constants";

export type GhApiBranchOrTag = {
  type: "branch" | "tag";
  label: string;
  name: string;
  commit: {
    sha: string;
    url: string;
  };
};

export const fetchRepositoryBranchList = async () => {
  const branchesPromise = Axios.get<GhApiBranchOrTag[]>(
    `/repos/${REPO_OWNER}/${REPO_NAME}/branches`,
    {
      baseURL: GH_API_BASE_URL,
    }
  );

  const tagsPromise = Axios.get<GhApiBranchOrTag[]>(
    `/repos/${REPO_OWNER}/${REPO_NAME}/tags`,
    {
      baseURL: GH_API_BASE_URL,
    }
  );

  const [branches, tags] = await Promise.all([
    branchesPromise,
    tagsPromise,
  ] as const);

  const branchesAndTags = [
    ...tags.data,
    ...branches.data.filter(
      (b) => b.name === "master" || b.name === "prerelease-rolling"
    ),
  ];

  for (const tag of tags.data) {
    tag.type = "tag";
  }

  for (const branch of branches.data) {
    branch.type = "branch";
  }

  for (const branchOrTag of branchesAndTags) {
    if (branchOrTag.name === "prerelease-rolling") {
      branchOrTag.label = "canary";
    } else {
      branchOrTag.label = branchOrTag.name;
    }
  }

  return branchesAndTags;
};
