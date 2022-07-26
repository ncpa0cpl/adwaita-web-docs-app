import {setupCache} from "../_snowpack/pkg/axios-cache-adapter.src.index.v2.7.3.js";
import localforage from "../_snowpack/pkg/localforage.v1.10.0.js";
const forageStore = localforage.createInstance({
  name: "axios-cache"
});
export const cache = setupCache({
  maxAge: 30 * 60 * 1e3,
  store: forageStore,
  exclude: {query: false}
});
