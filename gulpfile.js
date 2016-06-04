var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var order = require('gulp-order');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('es6', function() {
  gulp.src(['js/*.js'])
  .pipe(babel({
    'presets': ['es2015']
  }))
  .pipe(order(['js/app.js', 'js/ctrl.js', 'js/players.js']))
  .pipe(concat('hearts.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('sass', function() {
  return gulp.src('css/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('dist'));
});

gulp.watch('css/*.scss', ['sass']);
gulp.watch(['js/*.js'], ['es6']);

gulp.task('default', ['es6', 'sass']);
