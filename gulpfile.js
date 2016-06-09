var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var order = require('gulp-order');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var postcss = require('gulp-postcss');

gulp.task('es6', function() {
  gulp.src(['js/*.js'])
  .pipe(babel({
    'presets': ['es2015']
  }))
  .pipe(order(['js/app.js', 'js/ctrl.js', 'js/players.js', 'js/detailsCtrl.js', 'js/games.js']))
  .pipe(concat('hearts.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('sass', function() {
  return gulp.src('css/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('dist'));
});

// gulp.task('autoprefixer', function () {
//     return gulp.src('./src/*.css')
//         .pipe(sourcemaps.init())
//         .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
//         .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest('dist'));
// });

gulp.watch('css/*.scss', ['sass']);
gulp.watch(['js/*.js'], ['es6']);

gulp.task('default', ['es6', 'sass']);
