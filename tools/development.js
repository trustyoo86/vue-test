'use strict';

const merge = require('webpack-merge');
const base = require('./base');

module.exports = merge(base, {
  mode: 'development',
  devtool: '#source-map',
  devServer: {
    hot: true,
  },
});