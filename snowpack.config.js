// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig} */
module.exports = {
  root: "./src",
  mode: "development",
  optimize: {
    treeshake: true,
    target: "es2017",
    minify: false,
  },
  mount: {},
  plugins: ["@snowpack/plugin-sass"],
  packageOptions: {},
  devOptions: {},
  buildOptions: {
    out: "./dist",
  },
};
