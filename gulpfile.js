var gulp = require('gulp');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function(){
  return gulp.src('scss/*.scss')
    .pipe(sourcemaps.init())
      .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'));
});

gulp.task('sass-watch', function(){
  gulp.watch('scss/**/*.scss', ['sass']); 
});

gulp.task('useref', function(){
  return gulp.src('index.php')
    .pipe(useref())
    .pipe(gulp.dest('dist'));
});

gulp.task('minify-js', function () {
	return gulp.src('dist/js/*.js')
	    .pipe(uglify())
	    .pipe(gulp.dest('dist/js/'));
});

gulp.task('minify-css', function() {
    return gulp.src('dist/css/styles.min.css')
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('minify-images', function(){
  return gulp.src('images/**/*.+(png|jpg|gif|svg)')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images'));
});

gulp.task('production-prepare', function(callback) {
  runSequence('useref', ['minify-js','minify-css'], callback);
});