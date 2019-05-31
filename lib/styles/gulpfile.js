'use strict';

var _require = require('gulp'),
    series = _require.series,
    src = _require.src,
    dest = _require.dest;

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');

function compile() {
  return src('./index.scss').pipe(sass.sync())
  // .pipe(sass.sync({outputStyle: 'compressed'}))
  .pipe(autoprefixer({
    browsers: ['ie > 9', 'last 2 versions'],
    cascade: false
  })).pipe(cssmin({ advanced: false, keepSpecialComments: '*' })).pipe(dest('./lib'));
}
function compileCompoents() {
  return src('./components/*.scss').pipe(sass.sync())
  // .pipe(sass.sync({outputStyle: 'compressed'}))
  .pipe(autoprefixer({
    browsers: ['ie > 9', 'last 2 versions'],
    cascade: false
  })).pipe(cssmin({ advanced: false, keepSpecialComments: '*' })).pipe(dest('./lib/components'));
}
exports.build = series(compile, compileCompoents);