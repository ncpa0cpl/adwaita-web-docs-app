var o=Object.defineProperty;var h=Object.prototype.hasOwnProperty;var e=Object.getOwnPropertySymbols,i=Object.prototype.propertyIsEnumerable;var a=(n,r,t)=>r in n?o(n,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[r]=t,s=(n,r)=>{for(var t in r||(r={}))h.call(r,t)&&a(n,t,r[t]);if(e)for(var t of e(r))i.call(r,t)&&a(n,t,r[t]);return n};import{fetchRepositoryBranchList as p}from"../../adapters/github/fetch-repository-branch-list.js";import{sortTagAndBranches as b}from"../../helpers/sort-tag-and-branches.js";export const githubRepoActions={async updateBranchList(){const n=await p(),r=b(n,c=>c),t=n.length?n[0].name:"";return{branches:r,currentBranch:t}},async selectBranch(n,r){if(!n.branches.find(c=>c.name===r))throw new Error(`Branch ${r} not found`);return s(s({},n),{currentBranch:r})}};
