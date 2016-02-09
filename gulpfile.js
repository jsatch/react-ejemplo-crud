var gulp = require("gulp");
var browserify = require("gulp-browserify");
var concat = require("gulp-concat");
var gls = require('gulp-live-server');
var rename = require('gulp-rename');

gulp.task('browserify', function(){
  gulp.src('client/main.js')
    .pipe(browserify({transform:'reactify'}))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist'));

});

gulp.task('copy', function() {
  gulp.src('client/index.html')
    .pipe(gulp.dest('dist'));
  gulp.src('server/server.js')
    .pipe(gulp.dest('dist'));
  gulp.src('Procfile')
    .pipe(gulp.dest('dist'));
  gulp.src('manifest.yml')
    .pipe(gulp.dest('dist'));
  gulp.src('package-bluemix.json')
    .pipe(rename('package.json'))
    .pipe(gulp.dest('dist'));
  /*gulp.src('dist/package-bluemix.json')
    .pipe(rename('package.json'))
    .pipe(gulp.dest('dist'));;*/
});

gulp.task('default',['browserify', 'copy']);

gulp.task('watch', function() {
  gulp.watch('client/**/*.*', ['default']);
});

gulp.task('serve', function() {
  //1. run your script as a server
  var server = gls.new('./dist/server.js');
  server.start();
});
