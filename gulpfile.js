(function () {
  'use strict';

  const gulp = require('gulp');
  require('./gulp/drakov');
  require('./gulp/typescript');
  require('./gulp/build');
  require('./gulp/styles');

  const runSequence = require('run-sequence');
  const merge = require('merge-stream');
  const del = require('del');
  const sass = require('gulp-sass');
  const connect = require('gulp-connect');
  const open = require('gulp-open');
  const KarmaServer = require('karma').Server;

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

  // Main task for development stack
  gulp.task('test', () => {
    runSequence(
      'clean',
      'tslint',
      'ts',
      'assets',
      'clean-css',
      'dependencies',
      'run-test');
  });

  // default task starts watcher. in order not to start it each change
  // watcher will run the task bellow
  gulp.task('watch-rebuild', callback => {
    runSequence(
      'clean',
      'tslint',
      'ts',
      'assets',
      'clean-css',
      'dependencies',
      'run-test');
    callback();
  });

  // default task starts watcher. in order not to start it each change
  // watcher will run the task bellow without test
  gulp.task('watch-rebuild-without-test', callback => {
    runSequence(
      'clean',
      'ts',
      'assets',
      'clean-css',
      'dependencies');
    callback();
  });



  // Watch changes and rebuild
  gulp.task('watch', () => {
    gulp.watch(['src/**/**.ts', 'src/**/**.html', 'src/**/**.scss'], ['watch-rebuild']);
  });

  // Watch changes and rebuild without test
  gulp.task('watch-without-test', () => {
    gulp.watch(['src/**/**.ts', 'src/**/**.html', 'src/**/**.scss'], ['watch-rebuild-without-test']);
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

  // Removes all TypeScript test files
  gulp.task('clean-test', () => {
    return del(['dist/**/**.spec.js', 'dist/**/**.spec.js.map']);
  });

  // Run TypeScript tests
  gulp.task('run-test', done => {
    new KarmaServer({
      configFile: __dirname + '/karma.conf.js'
    }, done).start();
  });

})();
