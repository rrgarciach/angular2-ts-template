(function () {
  'use strict';

  const gulp = require('gulp');
  const runSequence = require('run-sequence');
  const merge = require('merge-stream');
  const del = require('del');
  const sass = require('gulp-sass');
  const concatCss = require('gulp-concat-css');
  const minifyCss = require('gulp-minify-css');
  const connect = require('gulp-connect');
  const open = require('gulp-open');
  const drakov = require('./gulp/drakov');
  const typescript = require('./gulp/typescript');
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

  // Copy dependencies to dist folder
  gulp.task('dependencies', () => {
    let rxjs = gulp.src([
      'node_modules/rxjs/bundles/Rx.js',
    ])
      .pipe(gulp.dest('dist/lib/rxjs'));

    let angular = gulp.src([
      'node_modules/angular2/bundles/angular2.dev.js',
      'node_modules/angular2/bundles/http.js',
      'node_modules/angular2/bundles/angular2-polyfills.js',
      'node_modules/angular2/bundles/router.js',
    ])
      .pipe(gulp.dest('dist/lib/angular2'));

    let dependencies = gulp.src([
      'node_modules/traceur/bin/traceur-runtime.js',
      'node_modules/systemjs/dist/system.js',
    ])
      .pipe(gulp.dest('dist/lib'));

    let jquery = gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
      ])
      .pipe(gulp.dest('dist/lib/jquery'));

    return merge(
      rxjs,
      dependencies,
      angular,
      jquery
    );
  });

  // Copy HTML to dist directory
  gulp.task('assets', () => {
    return gulp.src(['src/**/**.html', 'src/**/**.jpg', 'src/**/**.gif', 'src/**/**.png', 'src/**/**.ico'])
      .pipe(gulp.dest('dist'))
      .pipe(connect.reload());
  });

  // Compiles SASS files to CSS
  gulp.task('sass', () => {
    return gulp.src('src/**/**.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('dist/temp'));
  });

  // Concatenate all CSS files into one single bundle CSS file
  gulp.task('css-concat', ['sass'], function () {
    return gulp.src('dist/temp/**/**.css')
      .pipe(concatCss("app/assets/css/bundle.css"))
      .pipe(minifyCss({compatibility: 'ie8'}))
      .pipe(gulp.dest('dist'));
  });

  // Removes temporal CSS
  gulp.task('clean-css', ['css-concat'], () => {
    return del(['dist/temp']);
  });

  // Removes dist directory.
  gulp.task('clean', () => {
    return del(['dist', 'coverage']);
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
