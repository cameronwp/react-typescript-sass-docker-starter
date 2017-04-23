'use strict';

const del = require('del');
const gulp = require('gulp');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const webserver = require('gulp-webserver');

gulp.task('pre-clean', () => {
  return del([
    path.join(__dirname, './build/**/*')
  ]);
});

gulp.task('migrate', () => {
  return gulp.src('./src/index.html')
  .pipe(gulp.dest(path.join(__dirname, 'build')));
});

gulp.task('webpack', callback => {
  webpack(webpackConfig, (err, stats) => {
    if (err) {
      console.log(stats);
      throw new Error('webpack', err);
    }

    if (callback) {
      callback();
    }
  });
});

gulp.task('watch', ['default'], () => {
  gulp.watch(
    ['./src/**/*'],
  ['default']);
});

gulp.task('serve', ['watch'], () => {
  gulp.src('./build')
    .pipe(webserver({
      livereload: true,
      port: 8080,
      open: true,
      fallback: 'index.html'
    }));
});

gulp.task('default', ['pre-clean', 'webpack', 'migrate']);
