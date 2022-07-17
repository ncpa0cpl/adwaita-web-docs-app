import axios from "axios";
import { cache } from "./cache-adapter";

export const Axios = axios.create({
  adapter: cache.adapter,
});
