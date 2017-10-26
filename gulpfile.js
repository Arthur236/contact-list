let gulp = require('gulp');
let uglify = require('gulp-uglify');
let htmlreplace = require('gulp-html-replace');
let source = require('vinyl-source-stream');
let browserify = require('browserify');
let watchify = require('watchify');
let reactify = require('reactify');
let streamify = require('gulp-streamify');

gulp.task('browserify', function(){
    browserify('./src/js/main.js')
        .transform('reactify')
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function(){
    gulp.src('./src/index.html')
        .pipe(gulp.dest('dist'));
    gulp.src('./src/css/**/*.*')
        .pipe(gulp.dest('dist/css'));
    gulp.src('./src/js/vendors/*.*')
        .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['browserify', 'copy'], function(){
    return gulp.watch('src/**/*.*', ['browserify', 'copy']);
});
