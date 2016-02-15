(function () {
  'use strict';

  const gulp = require('gulp');
  const connect = require('gulp-connect');
  const open = require('gulp-open');

  const serverOptions = {
    hostname: 'localhost',
    root: 'dist',
    port: 8000,
    livereload: true
  };

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
