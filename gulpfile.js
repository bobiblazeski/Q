var fs = require('fs'),
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    wrap = require("gulp-wrap"),
    prettify = require('gulp-jsbeautifier');


gulp.task('default', function() {
    var exportEntriesString = exportsString();
    gulp.src("./src/*.js")
        .pipe(concat('q.js'))
        .pipe(wrap({ src: './src/template.txt'}, { exports: exportEntriesString}, { variable: 'data' }))
        .pipe(prettify())
        .pipe(gulp.dest("./dist"));
});



function exportsString() {
    var files = fs.readdirSync('./src/'),
        exportEntries = {};
    for (var i = 0; i < files.length; ++i) {
        var file = files[i];
        if (file.substring(file.length - 3) == '.js') {
            var key = file.substring(0, file.length - 3);
            exportEntries[key] = key;
        }
    }
    var exportEntriesObj = JSON.stringify(exportEntries).split("\"").join("");
    return exportEntriesObj.substring(1, exportEntriesObj.length - 1) + ",";
}