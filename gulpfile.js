(function () {
  'use strict';

  require('./gulp/build');
  require('./gulp/drakov');
  require('./gulp/styles');
  require('./gulp/typescript');
  require('./gulp/tests');
  require('./gulp/watch');

  const gulp = require('gulp');
  const runSequence = require('run-sequence');
  const merge = require('merge-stream');
  const del = require('del');
  const sass = require('gulp-sass');
  const connect = require('gulp-connect');
  const open = require('gulp-open');


  // not used yet
  const uglify = require('gulp-uglify');
  const concat = require('gulp-concat');

  const serverOptions = {
    hostname: 'localhost',
    root: 'dist',
    port: 8000,
    livereload: true
  };

  // Main task
  gulp.task('default', () => {
    runSequence(
      'clean',
      'tslint',
      'ts',
      'assets',
      'clean-css',
      'dependencies',
      'watch',
      'run-test',
      'serve',
      'browser',
      'mock-server');
  });

  // Main build task
  gulp.task('dist', () => {
    runSequence(
      'clean',
      'tslint',
      'ts-prod',
      'assets',
      'clean-css',
      'dependencies',
      'run-test',
      'clean-test');
  });


  // Serve lite server
  gulp.task('serve', () => {
    connect.server(serverOptions);
  });

  // Opens lite server in browser
  gulp.task('browser', () => {
    gulp.src('index.html')
      .pipe(open({ uri: 'http://' + serverOptions.hostname +':' + serverOptions.port }));
  });

})();
