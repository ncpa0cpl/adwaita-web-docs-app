import {setupCache} from "../_snowpack/pkg/axios-cache-adapter.js";
import localforage from "../_snowpack/pkg/localforage.js";
const forageStore = localforage.createInstance({
  name: "axios-cache"
});
export const cache = setupCache({
  maxAge: 15 * 60 * 1e3,
  store: forageStore,
  exclude: {query: false}
});
