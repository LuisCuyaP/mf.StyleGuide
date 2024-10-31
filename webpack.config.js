const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const path = require("path");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "myorg",
    projectName: "MyOrgStyle",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    entry: {
      main: path.resolve(__dirname, "src/myorg-MyOrgStyle.ts"),
    },
    output: {
      filename: "myorg-MyOrgStyle.js",
      path: path.resolve(__dirname, "dist"),
      libraryTarget: "system",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
  });
};
