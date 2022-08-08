import { setupCache } from "axios-cache-adapter/src/index";
import localforage from "localforage";

const forageStore = localforage.createInstance({
  name: "axios-cache",
});

export const cache = setupCache({
  maxAge: 30 * 60 * 1000,
  store: forageStore,
  exclude: { query: false },
});
