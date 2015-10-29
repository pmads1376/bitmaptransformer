var gulp = require('gulp'),
  mocha = require('gulp-mocha'),
  jscs = require('gulp-jscs'),
  jshint = require('gulp-jshint');

  gulp.task('lint', function(){
    return gulp.src('./*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
  });

  // gulp.task('style', function(){
  //   return gulp.src('./*.js')
  //     .pipe(jscs())
  //     .pipe(jscs.reporter());
  // });

  // gulp.task('style-fixer', function() {
  //   return gulp.src('./*.js')
  //       .pipe(jscs({fix: true}))
  //       .pipe(gulp.dest('.'));
  // });

  gulp.task('test', function () {
    return gulp.src('test.js', {read: false})
      .pipe(mocha());
  });

  gulp.task('default', ['lint', 'test']);
  // gulp.task('default', ['lint', 'test', 'style', 'style-fixer']);
  gulp.watch('./*.js', ['default']);
