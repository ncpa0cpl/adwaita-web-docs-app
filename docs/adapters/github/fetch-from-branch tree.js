import {Axios} from "../axios-instance.js";
export const fetchFromBranchTree = async (treeUrl, path) => {
  const treeRoot = await Axios.get(treeUrl);
  let currentNode = treeRoot.data.tree;
  let finalNode = void 0;
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
      finalNode = (await Axios.get(nextNodeRef.url)).data;
    } else {
      currentNode = (await Axios.get(nextNodeRef.url)).data.tree;
    }
  }
  if (!finalNode) {
    throw new Error("No file found");
  }
  return finalNode;
};
