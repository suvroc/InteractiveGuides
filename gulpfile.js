var gulp        = require('gulp');
var deploy      = require('gulp-gh-pages');

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});

gulp.task('copy', function() {
    gulp.src('./src/**/*')
    // Perform minification tasks, etc here
    .pipe(gulp.dest('./dist'));
});