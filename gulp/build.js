(function () {
  'use strict';

  const gulp = require('gulp');
  const connect = require('gulp-connect');
  const del = require('del');
  const merge = require('merge-stream');
  const runSequence = require('run-sequence');

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

  // Removes dist directory.
  gulp.task('clean', () => {
    return del(['dist', 'coverage']);
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
    return gulp.src([
        'src/**/**.html',
        'src/**/**.jpg',
        'src/**/**.gif',
        'src/**/**.png',
        'src/**/**.ico'
      ])
      .pipe(gulp.dest('dist'))
      .pipe(connect.reload());
  });

})();
