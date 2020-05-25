const webpack = require("webpack");
const merge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const { VueSSRServerPlugin } = require("./plugins/server");

const { baseConfig } = require("./webpack.base");

module.exports = merge(baseConfig, {
  entry: "./entry-server.js",

  output: {
    filename: "server-bundle.js",
    libraryTarget: "commonjs2",
  },

  target: "node",

  devtool: "source-map",

  externals: nodeExternals({
    whitelist: [/\.css$/],
  }),

  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      ),
      "process.env.VUE_ENV": '"server"',
      "process.browser": false,
    }),

    new VueSSRServerPlugin(),
  ],
});
