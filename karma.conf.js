// Karma configuration
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['systemjs', 'jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'node_modules/cryptojs/lib/Crypto.js',
      'node_modules/reflect-metadata/Reflect.js',
      'node_modules/rxjs/bundles/Rx.js',
      'node_modules/angular2/bundles/angular2.dev.js',
      'node_modules/angular2/bundles/http.dev.js',
      'node_modules/angular2/bundles/testing.dev.js',
      { pattern: 'dist/app/**/*.js', included: false, serve: true, watched: false },
      { pattern: 'dist/app/**/*.spec.js', included: true, serve: true, watched: true }
    ],

    systemjs: {
      config: {
        defaultJSExtensions: true,
        bundles: {
          angular2: [
            'angular2/core',
            'angular2/src/facade/lang',
            'angular2/src/facade/exceptions',
            'angular2/http/testing',
            'angular2/src/facade/collection'
          ]
        },
        map: {
          angular2: 'node_modules/angular2/bundles/angular2.dev.js'
        },
        paths: {
          'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js',
          'systemjs': 'node_modules/systemjs/dist/system.js',
          'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
          'traceur': 'node_modules/traceur/bin/traceur.js',
          'crypto': 'node_modules/cryptojs/lib/Crypto.js'
        }
      }
    },

    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-systemjs',
      'karma-spec-reporter',
      'karma-coverage'
    ],

    // list of files to exclude
    exclude: [
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [
      'spec',
      'coverage'
    ],

    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'dist/app/**/*.js': ['coverage']
    },

    // optionally, configure the reporter
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    // web server port
    port: 9876,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  })
};
