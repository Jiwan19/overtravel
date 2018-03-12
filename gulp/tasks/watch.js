var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function () {

    // to open server
    browserSync.init({
         server: {
             baseDir: "app"
         }
    });
    
    // 1 param is file to watch
    // 2 param is the what happen when the task run
    watch('./app/index.html', function () {
        browserSync.reload();
    });

    watch('./app/assets/styles/**/*.css', function () {
        gulp.start('cssInject');
    });

});

// 1 param is task name
// 2 param is dependencies task which the first to start before running task
// 3 param is what happen when the task run
gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
});