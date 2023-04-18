/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const path = require("path");
const { DefinePlugin } = require("webpack");

const dotenv = require("dotenv");

const isDevelopment = process.env.NODE_ENV !== "production";

const envPath = isDevelopment ? ".env" : ".env.production";
const env = dotenv.config({ path: envPath }).parsed || {};

const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.join(__dirname, "src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].[contenthash].chunk.js",
    publicPath: "/",
    clean: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@public": path.resolve(__dirname, "public"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: "esbuild-loader",
        exclude: /node_modules/,
        options: {
          loader: "tsx",
          target: "esnext",
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public/index.html"),
      favicon: path.join(__dirname, "public/favicon.ico"),
    }),
    new DefinePlugin(envKeys),
    isDevelopment &&
      new ReactRefreshWebpackPlugin({
        overlay: false,
      }),
  ].filter(Boolean),
  devServer: {
    host: "localhost",
    port: 3000,
    hot: true,
    open: true,
  },
};
