/*
 * Gulpfile
 * @author Michael McDermott
 * Created on 5/12/15.
 */

'use strict';

var gulp = require('gulp');
var path = require('path');
var runSequence = require('run-sequence');
var del = require('del');
var minifyCss = require('gulp-minify-css');
var ngAnnotate = require('gulp-ng-annotate');
var argv = require('minimist')(process.argv.slice(2));
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();

var SRC_DIRECTORY = 'app/';
var BUILD_DIRECTORY = 'dist/';

var BOWER_DIRECTORY = 'bower_components/';

var jsFilter = $.filter('**/*.js');
var cssFilter = $.filter('**/*.css');

var src = {};
var browserSync;

// Clean output directory
gulp.task('clean', del.bind(
  null, ['.tmp', BUILD_DIRECTORY + '*'], {
    dot: true
  }
));

gulp.task('images', function() {
  return gulp.src(SRC_DIRECTORY + '**/*.svg')
    .pipe(gulp.dest(BUILD_DIRECTORY));
});

gulp.task('html', function() {
  return gulp.src([
      SRC_DIRECTORY + '*.html',
      SRC_DIRECTORY + '**/*.html'
    ])
    .pipe($.plumber())
    .pipe(gulp.dest(BUILD_DIRECTORY));
});

gulp.task('js', function() {
  // Copy server.js and minify if production
  var serverChain = gulp.src('server.js');
  if (argv.production) {
    serverChain = serverChain.pipe($.uglify({ mangle: true }));
  }
  serverChain = serverChain.pipe(gulp.dest(BUILD_DIRECTORY));
  var jsChain = gulp.src([
      SRC_DIRECTORY + '**/*.js',
      '!' + BOWER_DIRECTORY + '**/*.*',
    ])
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.concat('bundle.min.js', { newLine: ';' }))
    .pipe(ngAnnotate({ add: true }));
  // Only uglify if production
  if (argv.production) {
    jsChain = jsChain.pipe($.uglify({ mangle: true }));
  }
  jsChain = jsChain
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(BUILD_DIRECTORY));
  return jsChain;
});

gulp.task('scss', function() {
  return gulp.src([
      SRC_DIRECTORY + '**/*.scss',
      '!' + BOWER_DIRECTORY + '**/*.*'
    ])
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.autoprefixer())
    .pipe(minifyCss())
    .pipe($.sourcemaps.write())
    .pipe($.concat('bundle.min.css'))
    .pipe(gulp.dest(BUILD_DIRECTORY))
    .pipe(browserSync.stream());
});

gulp.task('vendor', function() {
  return gulp.src([
      BOWER_DIRECTORY + 'jquery/dist/jquery.min.js',
      BOWER_DIRECTORY + 'jquery/dist/jquery.min.map',
      BOWER_DIRECTORY + 'angular/angular.min.js',
      BOWER_DIRECTORY + 'angular/angular.min.js.map',
      BOWER_DIRECTORY + 'jquery-ui/jquery-ui.min.js',
      BOWER_DIRECTORY + 'ng-lodash/build/ng-lodash.min.js'
    ])
    .pipe(gulp.dest(BUILD_DIRECTORY));
});

gulp.task('build', ['clean'], function(callback) {
  runSequence(['vendor', 'scss'], 'images', 'html', 'js', callback);
});

// Launch BrowserSync server
gulp.task('sync', ['build'], function(cb) {

  browserSync.init({
      notify: true,
      server: 'dist/'
    });

    gulp.watch(SRC_DIRECTORY + '**/*.scss', ['scss']);
    gulp.watch(SRC_DIRECTORY + '**/*.js', ['js']);
    gulp.watch(SRC_DIRECTORY + '**/*.html', ['html']);

    gulp
      .watch(BUILD_DIRECTORY + '**/*.js')
      .on('change', browserSync.reload);
    gulp
      .watch(BUILD_DIRECTORY + '**/*.html')
      .on('change', browserSync.reload);
});

gulp.task('default', ['sync']);
