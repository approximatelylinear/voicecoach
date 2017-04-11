/* eslint-disable */
const webpack = require('webpack');
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const baseConfig = require('./webpack.config.base.js')
const webpackMerge = require('webpack-merge');
const ROOT_PATH = path.resolve(__dirname)

module.exports = webpackMerge(baseConfig, {
  devtool: 'eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:1337',
    'webpack/hot/only-dev-server',
    path.resolve(ROOT_PATH, 'app/src/index.js'),
  ],
  output: {
    path: path.resolve(ROOT_PATH, 'app/build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: baseConfig.plugins.concat([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      API_BASE_URL: JSON.stringify("http://localhost:5000"),
      __DEV__: true
    }),
    new HtmlwebpackPlugin({
      title: 'UAT - Development',
      template: 'config/templates/index.dev.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ])
});
