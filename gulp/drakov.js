{
  const drakov = require('drakov');

  const argv = {
    sourceFiles: 'path/to/files/**.md',
    serverPort: 3000,
    staticPaths: [
      '/bin/blueprints'
    ],
    stealthmode: true,
    disableCORS: false,
    autoOptions: true,
    header: 'Authorization',
    delay: 1000,
  };


  // Run mock-server from API blueprint:
  gulp.task('mock-server', () => {
    drakov.run(argv);
  });
}