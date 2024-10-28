const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const { BaseHrefWebpackPlugin } = require("base-href-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "myorg",
    projectName: "MyOrgStyle",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // No añadimos reglas extras para CSS aquí
    module: {
      rules: [
        // Regla para otros archivos como imágenes SVG
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: "asset/resource",
          generator: {
            filename: "img/[name][ext][query]",
          },
        },
      ],
    },
    plugins: [
      new BaseHrefWebpackPlugin({
        baseHref: "/styleguide/",
      }),
    ],
  });
};
