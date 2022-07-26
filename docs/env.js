import * as __SNOWPACK_ENV__ from './_snowpack/env.js';

const {GHP_BASE_URL, MODE} = __SNOWPACK_ENV__;
export const ROUTER_BASE_URL = GHP_BASE_URL ?? "";
export const IS_DEV = MODE === "development";
