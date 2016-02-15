(function () {
  'use strict';
  /**
   * This is your main gulpfile
   * The gulp tasks are splitted in several files inside gulp/ directory to avoid
   * this file to become a monolithic script.
   */

  /**
   * The lines below includes the gulp files inside gulp/ directory:
   */
  require('./gulp/build');
  require('./gulp/drakov');
  require('./gulp/styles');
  require('./gulp/server');
  require('./gulp/typescript');
  require('./gulp/tests');
  require('./gulp/watch');

  /**
   * The next lines below includes the required dependencies for the tasks written
   * in this file:
   */
  const gulp = require('gulp');
  const runSequence = require('run-sequence');

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

})();
