/**
 * @file gulpfile.js
 *
 * A Gulp 4 gulpfile for bootgulp.
 *
 * @license MIT
 * @copyright 2019 Chris Komlenic
 */
'use strict';

/**
 * Load required plugins.
 */
const gulp         = require('gulp');
const sass         = require('gulp-sass');
const cleanCSS     = require('gulp-clean-css');
const concat       = require('gulp-concat');
const uglify       = require('gulp-uglify');
const imagemin     = require('gulp-imagemin');
const htmlmin      = require('gulp-htmlmin');
const changed      = require('gulp-changed');
const autoprefixer = require('gulp-autoprefixer');

// Source, distribution, and boostrap-sass locations. Ensure that these values
// begin with './' and end with '/'.
const source        = './src/';
const dist          = './dist/';
const bootstrapSass = './node_modules/bootstrap-sass/';

// SCSS file locations and options.
const scss = {
  in: source + 'scss/style.scss',
  out: dist + 'css/',
  watch: source + 'scss/**/*.scss',
  sassOpts: {
    outputStyle: 'expanded',
    precison: 8,
    errLogToConsole: true,
    includePaths: [bootstrapSass + 'assets/stylesheets'],
  }
};

// JS
const js = {
  in: [bootstrapSass + 'assets/javascripts/bootstrap.js', source + 'js/**/*.js'],
  out: dist + 'js/',
}

// Fonts
const fonts = {
  in: [source + 'fonts/*.*', bootstrapSass + 'assets/fonts/**/*'],
  out: dist + 'fonts/',
};

// Images
const img = {
  in: source + 'img/**/*',
  out: dist + 'img/',
}

// Content
const content_extension = 'html';
const content = {
  in: source + '**/*.' + content_extension,
  out: dist,
  htmlMinOpts: {
    collapseWhitespace: true,
    conservativeCollapse: true,
    removeComments: true,
    minifyCSS: true,
    minifyJS: true,
  }
}

/**
 * Process Sass files.
 */
function processCSS() {
  return gulp
    .src(scss.in)
    // Compile scss files.
    .pipe(sass(scss.sassOpts).on('error', sass.logError))
    // Add vendor prefixes.
    .pipe(autoprefixer())
    // Write un-minified and un-concatenated CSS files.
    .pipe(gulp.dest(scss.out))
    // Minify CSS.
    .pipe(cleanCSS({compatibility: 'ie9'}))
    // Concatenate CSS.
    .pipe(concat('style.min.css'))
    // Write final CSS file.
    .pipe(gulp.dest(scss.out));
}

/**
 * Process JavaScript files.
 */
function processJS() {
  return gulp
    .src(js.in)
    // Write un-minified and un-concatenated JS files.
    .pipe(gulp.dest(js.out))
    // Minify JS.
    .pipe(uglify())
    // Concatenate JS.
    .pipe(concat('script.min.js'))
    // Write final JS file.
    .pipe(gulp.dest(js.out));
}

/**
 * Process/copy images to distribution.
 */
function processImg() {
  return gulp
    .src(img.in)
    // Only process changed/new files.
    .pipe(changed(img.out))
    // Optimize image filesizes.
    .pipe(imagemin())
    // Write final image files.
    .pipe(gulp.dest(img.out))
}

/**
 * Process/copy fonts to distribution.
 */
function processFonts() {
  return gulp
    .src(fonts.in)
    // Only process changed/new fonts.
    .pipe(changed(fonts.out))
    // Write final font files.
    .pipe(gulp.dest(fonts.out));
}

/**
 * Process/copy content to distribution.
 */
function processContent() {
  return gulp
    .src(content.in)
    // Only process changed/new content.
    .pipe(changed(content.out))
    // Minify HTML.
    .pipe(htmlmin(content.htmlMinOpts))
    // Write final content files.
    .pipe(gulp.dest(content.out));
}

/**
 * Watch folders for changes and execute appropriate actions.
 */
function watchFiles() {

  // Watch CSS.
  let watchCSS = gulp.watch(scss.watch, {interval: 500, usePolling: true}, processCSS);
  watchCSS.on('all', function(event, path) {
    logFileChanges(event, path);
  });

  // Watch JS.
  let watchJS = gulp.watch(js.in, {interval: 500, usePolling: true}, processJS);
  watchJS.on('all', function(event, path) {
    logFileChanges(event, path);
  });

  // Watch images.
  let watchImg = gulp.watch(img.in, {interval: 500, usePolling: true}, processImg);
  watchImg.on('all', function(event, path) {
    logFileChanges(event, path);
  });

  // Watch fonts.
  let watchFonts = gulp.watch(fonts.in, {interval: 500, usePolling: true}, processFonts);
  watchFonts.on('all', function(event, path) {
    logFileChanges(event, path);
  });

  // Watch Content.
  let watchContent = gulp.watch(content.in, {interval: 500, usePolling: true}, processContent);
  watchContent.on('all', function(event, path) {
    logFileChanges(event, path);
  });

}

/**
 * Outputs messages regarding changes in watched files.
 *
 * @param {string} event Watched events.
 * @param {string} path The path of the file that changed.
 *
 * @see https://gulpjs.com/docs/en/api/watch
 */
function logFileChanges(event, path) {

  let fileDirString = '';
  let eventString   = '';

  switch(event) {
    case 'add':
      eventString   = 'added';
      fileDirString = 'file';
      break;
    case 'addDir':
      eventString   = 'added';
      fileDirString = 'directory';
      break;
    case 'change':
      eventString   = 'changed';
      fileDirString = 'file';
      break;
    case 'unlink':
      eventString   = 'removed';
      fileDirString = 'file';
      break;
    case 'unlinkDir':
      eventString   = 'removed';
      fileDirString = 'directory';
      break;
  }

  console.log(fileDirString.charAt(0).toUpperCase() + fileDirString.slice(1) +
   ' ' + path + ' was ' + eventString + ', running tasks...');

}

/**
 * Exported/Exposed gulp tasks.
 */
exports.css     = processCSS;
exports.js      = processJS;
exports.img     = processImg;
exports.fonts   = processFonts;
exports.content = processContent;
exports.default = gulp.series(processCSS, processJS, processImg, processFonts, processContent);
exports.watch   = gulp.series(exports.default, watchFiles);
