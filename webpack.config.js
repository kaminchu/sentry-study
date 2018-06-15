const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.WEBPACK_SERVE ? "development" : "production",
  entry: "./src/js/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./public")
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [
        {
          loader: "babel-loader"
        }
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
      inject: true,
      minify: true,
      hash: true
    })
  ]
};