export * from "./envs/public-env";
export * from "./envs/server-env";
export * from "./endpoints";

export const NODE_ENV = process.env.NODE_ENV || "development";
export const IS_PROD = NODE_ENV === "production";
export const IS_DEV = NODE_ENV === "development";
export const IS_TEST = NODE_ENV === "test";
