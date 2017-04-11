/* eslint-disable */
const webpack = require('webpack');
const glob = require('glob');
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

const ROOT_PATH = path.resolve(__dirname);

module.exports = {
  devtool: 'eval',
  module: {
    rules: [
      // Javascript : pre-compile eslinting on each save.
      {
        test: /\.js$/,
        include: path.resolve(ROOT_PATH, './app'),
        enforce: 'pre',
        use: [{loader: 'eslint-loader', options: {rules: {'no-console': 0}}}],
      },
      // Javascript : transform to es2015
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss|.css$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "resolve-url-loader"
        }, {
          loader: "postcss-loader"
        }, {
          loader: "sass-loader",
          options: {
            includePaths: ['./node_modules']
          }
        }]
      },

      {
        test:  /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
        loader: "file-loader"
      },
      // JSON : support loading json
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]',
        },
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      components: path.resolve(ROOT_PATH, 'app/src/components'),
      containers: path.resolve(ROOT_PATH, 'app/src/containers'),
      pages: path.resolve(ROOT_PATH, 'app/src/pages'),
      config: path.resolve(ROOT_PATH, 'app/src/config'),
      utils: path.resolve(ROOT_PATH, 'app/src/utils'),
      globalStyles: path.resolve(ROOT_PATH, 'app/styles'),
      "bootstrap-sass": "bootstrap-sass/assets/stylesheets/bootstrap"
    },
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.LoaderOptionsPlugin({
       test: /\.scss|.css$/,
       options: {
         postcss: {
           //TODO: specifiy browser support in order to trim down
           defaults: [autoprefixer]
         }
       }
    })
  ]
};
