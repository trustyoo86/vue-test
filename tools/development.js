'use strict';

const merge = require('webpack-merge');
const base = require('./base');

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    watch: true,
    port: 9000,
  },
});