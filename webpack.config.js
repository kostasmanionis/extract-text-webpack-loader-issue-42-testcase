/* eslint-env node */
var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');


var entries = {
  // common: ["extjs", "underscore"],
  "modules/patient_index": "patient_index",
  // "modules/account": "account",
  "modules/settings": "settings",
  "modules/desktop": "desktop",
  "modules/calendar": "calendar",
  // "modules/remote_control": "remote_control",
  // "modules/dashboard": "dashboard",
  "modules/login": "login",
  "modules/patients": "patients",
  "modules/cryptor": "cryptor",
  // "modules/wiki": "wiki"
};

module.exports = {
  entry: {
    a: 'a',
    b: 'b'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style", ["css"]) },
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
    new webpack.optimize.CommonsChunkPlugin({
      name: "common",
      minChunks: 2
    }),
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

