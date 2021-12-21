const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const path = require("path");
const { EnvironmentPlugin } = require("webpack");
const Dotenv = require("dotenv-webpack");

/** @type {import('webpack').Configuration} */

module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    publicPath: "/"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-react",
              {
                runtime: "automatic"
              }
            ]
          ]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.(png|jp(e*)g|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000
            }
          }
        ]
      }

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new ESLintPlugin({
      files: ["src/**/*.js"]
    }),
    new EnvironmentPlugin({
      NODE_ENV: "development",
      DEBUG: false
    }),
    new Dotenv()
  ],

  devServer: {
    open: true,
    historyApiFallback: true,
    hot: true
  }

};
