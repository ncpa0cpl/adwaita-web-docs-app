const { GHP_BASE_URL, MODE } = import.meta.env;

export const ROUTER_BASE_URL: string = GHP_BASE_URL ?? "";
export const IS_DEV = MODE === "development";
