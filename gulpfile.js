var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    wrap = require("gulp-wrap"),
    prettify = require('gulp-jsbeautifier');

gulp.task('default', function() {
    gulp.src("./src/*.js")
        .pipe(concat('q.js'))
        .pipe(wrap({ src: './src/template.txt'}))
        .pipe(prettify())
        .pipe(gulp.dest("./dist"));
});