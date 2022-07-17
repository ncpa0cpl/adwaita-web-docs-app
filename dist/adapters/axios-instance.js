import axios from "../_snowpack/pkg/axios.js";
import {cache} from "./cache-adapter.js";
export const Axios = axios.create({
  adapter: cache.adapter
});
