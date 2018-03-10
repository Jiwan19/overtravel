var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import');

// 1 param is default is the task name
// 2 param is the what happen when the task run
gulp.task('default', function() {
   console.log("Created a Gulp Task") ;
});

gulp.task('html', function() {
    console.log('Imagine something useful being done to your HTML');
});

gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function() {
    
    // 1 param is file to watch
    // 2 param is the what happen when the task run
    watch('./app/index.html', function() {
        //automatically start/trigger the html task 
        gulp.start('html'); 
    });
    
    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles'); 
    });
    
});