/* eslint-env node */
var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
  entry: {
    a: 'a',
    b: 'b'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract("text") },
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css")
  ],

  resolve: {
    root: [
      path.join(__dirname)
    ],
  },
  output: {
    filename: "[name].js",
    path: "out",
    publicPath: '/out/'
  }

  // devtool: 'source-map'
};

