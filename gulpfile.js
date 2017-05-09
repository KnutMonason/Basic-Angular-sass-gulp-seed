var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');

gulp.task('sassy', function() {
    return gulp.src('application/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('application/css'))
});

//Watch task
gulp.task('default', function() {
    gulp.watch('./application/**/*.scss', ['sassy']);
});

gulp.task('webserver', function() {
    gulp.src('.')
        .pipe(webserver({
            root: 'path/',
            livereload: true,
            directoryListing: true,
            open: true,
        }));
});