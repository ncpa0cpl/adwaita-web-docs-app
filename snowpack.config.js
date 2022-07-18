// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration
const fs = require("fs");

/** @type Record<string, String> */
const env = {};

try {
  const envFile = fs.readFileSync(".env", "utf8");
  const lines = envFile.split("\n");
  for (const line of lines) {
    const [key, value] = line.split("=");
    env[key] = value;

    if (key in process.env) {
      env[key] = process.env[key];
    }
  }
} catch (e) {}

const isDev = env["MODE"] === "development";

/** @type {import("snowpack").SnowpackUserConfig} */
module.exports = {
  root: "./src",
  mode: env["MODE"] || "production",
  env,
  optimize: {
    target: "es2017",
    treeshake: true,
    minify: !isDev,
  },
  mount: {},
  plugins: [
    [
      "@snowpack/plugin-sass",
      {
        compilerOptions: {
          style: isDev ? "expanded" : "compressed",
        },
      },
    ],
  ],
  packageOptions: {},
  devOptions: {},
  buildOptions: {
    baseUrl: isDev ? "" : "/adwaita-web-docs-app",
    out: "./docs",
  },
};
