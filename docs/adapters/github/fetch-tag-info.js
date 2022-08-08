import{Axios as t}from"../axios-instance.js";export const fetchTagInfo=async o=>(await t.get(o.commit.url)).data;
