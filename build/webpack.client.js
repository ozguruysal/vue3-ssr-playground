const webpack = require("webpack");
const merge = require("webpack-merge");
const { VueSSRClientPlugin } = require("./plugins/client");

const { baseConfig } = require("./webpack.base");

module.exports = merge(baseConfig, {
  entry: "./entry-client.js",

  optimization: {
    runtimeChunk: {
      name: "manifest",
    },

    splitChunks: {
      chunks: "all",
    },
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      ),
      "process.env.VUE_ENV": '"client"',
      "process.browser": true,
    }),

    new VueSSRClientPlugin(),
  ],
});
