var fs = require('fs'),
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    wrap = require("gulp-wrap"),
    prettify = require('gulp-jsbeautifier'),
    rename = require("gulp-rename"),
    jsdoc = require("gulp-jsdoc");


gulp.task('default', function() {
    var exportEntriesString = exportsString();
    gulp.src("./src/*.js")
        .pipe(concat('q.js'))
        .pipe(wrap({ src: './templates/distribution.txt'}, { exports: exportEntriesString}, { variable: 'data' }))
        .pipe(prettify())
        .pipe(gulp.dest("./dist"))
        .pipe(uglify())
        .pipe(rename("q.min.js"))
        .pipe(gulp.dest("./dist"));



});
// TODO documentation generation is falwe, without contents
gulp.task('documentation', function() {
    var exportEntriesString = exportsString();
    gulp.src("./src/*.js")
        .pipe(concat('q.docs.js'))
        .pipe(wrap({ src: './templates/documentation.txt'}, { exports: exportEntriesString}, { variable: 'data' }))
        .pipe(prettify())
        .pipe(gulp.dest("./dist"));

    gulp.src("./dist/q.docs.js")
        .pipe(jsdoc.parser({
            plugins: ['plugins/markdown']
        }))
        .pipe(jsdoc.generator('./docs',{
            path: 'ink-docstrap',
            systemName      : 'Q',
            footer          : "Q",
            copyright       : "Slobodan Blazeski 2015",
            navType         : "vertical",
            theme           : "journal",
            linenums        : true,
            collapseSymbols : false,
            inverseNav      : false,
            outputSourceFiles: true
        }));
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