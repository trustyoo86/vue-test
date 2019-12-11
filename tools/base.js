'use strict';

const HtmlWebpackPlugin = require('vue-html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { join } = require('path');

module.exports = {
  entry: {
    'main': join(__dirname, '..', 'src', 'index.js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    },
    extensions: ['*', '.js', '.vue', '.json'],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      vue: true,
    }),
  ],
};