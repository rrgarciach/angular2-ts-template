(function () {
  'use strict';

  const gulp = require('gulp');
  const concatCss = require('gulp-concat-css');
  const del = require('del');
  const minifyCss = require('gulp-minify-css');
  const sass = require('gulp-sass');

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

})();
