import{quark as s}from"../../_snowpack/pkg/react-quarks.js";import{githubRepo as t}from"../github-repo/github-repo.js";import{examplesActions as c}from"./actions.js";import{exampleSelectors as n}from"./selectors.js";export const examples=s({components:{}},{actions:c,selectors:n});t.subscribe(r=>{if(r.currentBranch){const e=r.branches.find(o=>o.name===r.currentBranch);e.type==="tag"?examples.setFromGithubTag(e):examples.setFromGithubBranch(e.name)}});
