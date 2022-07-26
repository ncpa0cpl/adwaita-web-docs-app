import axios from "../_snowpack/pkg/axios.v0.27.2.js";
import {cache} from "./cache-adapter.js";
export const Axios = axios.create({
  adapter: cache.adapter
});
