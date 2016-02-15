(function () {
  'use strict';

  const gulp = require('gulp');
  const runSequence = require('run-sequence');

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


})();
