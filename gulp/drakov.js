{
  'use strict';

  const gulp = require('gulp');
  const drakov = require('drakov');

  const argv = {
    sourceFiles: './bin/blueprints/**.md',
    serverPort: 3000,
    disableCORS: false,
    autoOptions: true,
    //header: 'Authorization',
    delay: 1000
  };

// Run mock-server from API blueprint:
  module.exports = gulp.task('mock-server', () => {
    drakov.run(argv, () => {
      console.log('running...');
    });
  });
};