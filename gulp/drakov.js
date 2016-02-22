(function () {
  'use strict';

  const gulp = require('gulp');
  const drakov = require('drakov');

  const argv = {
    sourceFiles: './api_blueprints/**/**.md',
    serverPort: 3030,
    disableCORS: false,
    autoOptions: true,
    header: 'Authorization',
    delay: 500,
    method: ['HEAD','GET','PUT','DELETE','OPTIONS','POST','PATCH']
  };

  // Run mock-server from API blueprint:
  module.exports = gulp.task('mock-server', () => {
    drakov.run(argv, () => {
      console.log('API Mock Server is up and running...');
    });
  });

})();
