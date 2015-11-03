var gulp = require('gulp'),
  mocha = require('gulp-mocha'),
  jscs = require('gulp-jscs'),
  jshint = require('gulp-jshint');

  gulp.task('lint', function(){
    return gulp.src('./*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
  });

  gulp.task('test', function () {
    return gulp.src('test.js', {read: false})
      .pipe(mocha());
  });

  gulp.task('default', ['lint', 'test']);
  gulp.watch('./*.js', ['default']);
