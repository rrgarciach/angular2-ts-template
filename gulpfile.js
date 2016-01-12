var gulp = require('gulp');
var ts = require('gulp-typescript');
var typescript = require('typescript');
var del = require('del');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');
var connect = require('gulp-connect');
var open = require('gulp-open');
var KarmaServer = require('karma').Server;
var merge = require('merge-stream');

var serverOptions = {
  root: 'dist',
  port: 8000,
  livereload: true
};

// Main task
gulp.task('default', function () {
  runSequence(
    'clean',
    'ts',
    'html-css',
    'dependencies',
    'test',
    'clean-test',
    'serve',
    'browser',
    'watch');
});

// Main build task
gulp.task('build', function() {
  runSequence(
    'clean',
    'ts-prod',
    'html-css',
    'dependencies',
    'test',
    'clean-test');
});

// Main task for development stack
gulp.task('dev', function() {
  runSequence(
    'clean',
    'ts',
    'html-css',
    'dependencies',
    'test',
    'serve',
    'browser',
    'watch');
});

// default task starts watcher. in order not to start it each change
// watcher will run the task bellow
gulp.task('watch-rebuild', function (callback) {
  runSequence(
    'clean',
    'ts',
    'html-css',
    'dependencies',
    'test',
    'clean-test');
  callback();
});

// Copy dependencies to dist folder
gulp.task('dependencies', function () {
  var rxjs = gulp.src([
    'node_modules/rxjs/bundles/Rx.js',
  ])
    .pipe(gulp.dest('dist/lib/rjxs'));

  var angular = gulp.src([
    'node_modules/angular2/bundles/angular2.dev.js',
    'node_modules/angular2/bundles/http.js',
    'node_modules/angular2/bundles/angular2-polyfills.js',
    'node_modules/angular2/bundles/router.js',
  ])
    .pipe(gulp.dest('dist/lib/angular2'));

  var dependencies = gulp.src([
    'node_modules/traceur/bin/traceur-runtime.js',
    'node_modules/systemjs/dist/system.js',
  ])
    .pipe(gulp.dest('dist/lib'));

  return merge(rxjs, dependencies);
});

// TypeScript compilation to dist directory
gulp.task('ts', function () {
  var tsProject = ts.createProject('tsconfig.json', {
    typescript: typescript
  });

  return gulp.src(['src/**/**.ts'])
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject))
    .pipe(sourcemaps.write('./', { includeContent: true, sourceRoot: '/src' }))
    .pipe(gulp.dest('dist'));
});

// Compiles typescript for production environment removing the source maps used only in development mode
gulp.task('ts-prod', function () {
  var tsProject = ts.createProject('tsconfig.json', {
    typescript: typescript
  });

  return gulp.src(['src/**/**.ts'])
    .pipe(ts(tsProject))
    .pipe(gulp.dest('dist'));
});

// Copy HTML and CSS to dist directory
gulp.task('html-css', function () {
  return gulp.src(['src/**/**.html', 'src/**/**.css'])
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

// Removes dist directory.
gulp.task('clean', function () {
  return del(['dist']);
});

// Watch changes
gulp.task('watch', function () {
  gulp.watch(['src/**/**.ts', 'src/**/**.html'], ['watch-rebuild']);
});

// Serve lite server
gulp.task('serve', function () {
  connect.server(serverOptions);
});

// Opens lite server in browser
gulp.task('browser', function () {
  gulp.src('index.html')
    .pipe(open({ uri: 'http://localhost:' + serverOptions.port }));
});

// Removes all TypeScript test files
gulp.task('clean-test', function () {
  return del(['dist/**/**.spec.js', 'dist/**/**.spec.js.map']);
});

// Run TypeScript tests
gulp.task('test', function (done) {
  new KarmaServer({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});
