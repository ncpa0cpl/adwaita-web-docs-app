import { Axios } from "../axios-instance";

export type BranchTree = {
  tree: Array<{
    path: string;
    type: string;
    url: string;
  }>;
};

export type LeafNode = {
  url: string;
  content: string;
  encoding: string;
};

export const fetchFromBranchTree = async (
  treeUrl: string,
  path: string[]
): Promise<LeafNode> => {
  const treeRoot = await Axios.get<BranchTree>(treeUrl);

  let currentNode = treeRoot.data.tree;
  let finalNode: undefined | LeafNode = undefined;

  for (const index of path.keys()) {
    const segment = path[index];
    const isLastSegment = index === path.length - 1;

    const nextNodeRef = currentNode.find((node) => node.path === segment);

    if (!nextNodeRef) {
      throw new Error(`${segment} not found`);
    }

    if (!isLastSegment && nextNodeRef.type !== "tree") {
      throw new Error(`${segment} is not a directory`);
    }

    if (isLastSegment) {
      finalNode = (await Axios.get<LeafNode>(nextNodeRef.url)).data;
    } else {
      currentNode = (await Axios.get<BranchTree>(nextNodeRef.url)).data.tree;
    }
  }

  if (!finalNode) {
    throw new Error("No file found");
  }
  return finalNode;
};
