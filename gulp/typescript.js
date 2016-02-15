(function () {
  'use strict';

  const gulp = require('gulp');
  const drakov = require('drakov');
  const ts = require('gulp-typescript');
  const typescript = require('typescript');
  const sourcemaps = require('gulp-sourcemaps');
  const tslint = require("gulp-tslint");

  // TypeScript compilation to dist directory
  module.exports = gulp.task('ts', () => {
    let tsProject = ts.createProject('tsconfig-dev.json', {
      typescript: typescript
    });

    return gulp.src(['src/**/**.ts'])
      .pipe(sourcemaps.init())
      .pipe(ts(tsProject))
      .pipe(sourcemaps.write('./', { includeContent: true, sourceRoot: '/src' }))
      .pipe(gulp.dest('dist'));
  });

  // Compiles typescript for production environment removing the source maps used only in development mode
  module.exports = gulp.task('ts-prod', () => {
    let tsProject = ts.createProject('tsconfig.json', {
      typescript: typescript
    });

    return gulp.src(['src/**/**.ts'])
      .pipe(ts(tsProject))
      .pipe(gulp.dest('dist'));
  });

  // Look at all ts file to be sure all follows the same code standard defined at tslint.json file
  gulp.task('tslint', () => {
    return gulp.src('src/app/**/*.ts')
      .pipe(tslint())
      .pipe(tslint.report('verbose'));
  });

})();
