import { setupCache } from "axios-cache-adapter";
import localforage from "localforage";

const forageStore = localforage.createInstance({
  name: "axios-cache",
});

export const cache = setupCache({
  maxAge: 15 * 60 * 1000,
  store: forageStore,
  exclude: { query: false },
});
