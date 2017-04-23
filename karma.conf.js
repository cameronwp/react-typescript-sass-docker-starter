'use strict';

const _ = require('lodash');
const webpackConfig = require('./webpack.config');

// Karma configuration
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai-as-promised', 'chai'],
    files: [
      // each file acts as entry point for the webpack configuration
      'test/**/*'
    ],

    preprocessors: {
      // add webpack as preprocessor
      'test/**/*.tsx': ['webpack', 'sourcemap']
    },

    webpack: _.merge(webpackConfig, {externals: {
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true
    }}),

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'errors-only'
    },
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },
    plugins: [
      'karma-*'
    ],
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: false
  });
};
