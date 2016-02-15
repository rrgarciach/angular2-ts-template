(function () {
  'use strict';

  const gulp = require('gulp');
  const del = require('del');
  const runSequence = require('run-sequence');
  const KarmaServer = require('karma').Server;

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

  // Removes all TypeScript test files
  gulp.task('clean-test', () => {
    return del([
      'dist/**/**.spec.js',
      'dist/**/**.spec.js.map'
    ]);
  });

  // Run TypeScript tests
  gulp.task('run-test', done => {
    new KarmaServer({
      configFile: __dirname + '/../karma.conf.js'
    }, done).start();
  });

})();
