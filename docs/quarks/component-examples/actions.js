import{fetchBranchInfo as a}from"../../adapters/github/fetch-branch-info.js";import{fetchFromBranchTree as o}from"../../adapters/github/fetch-from-branch tree.js";import{fetchTagInfo as s}from"../../adapters/github/fetch-tag-info.js";export const examplesActions={async setFromGithubBranch(r,n){try{const t=await a(n),e=await o(t.commit.commit.tree.url,["docs","examples.json"]);if(e.encoding!=="base64")throw new Error("Unsupported encoding");return JSON.parse(atob(e.content))}catch(t){return{components:{}}}},async setFromGithubTag(r,n){try{const t=await s(n),e=await o(t.commit.tree.url,["docs","examples.json"]);if(e.encoding!=="base64")throw new Error("Unsupported encoding");return JSON.parse(atob(e.content))}catch(t){return{components:{}}}}};
