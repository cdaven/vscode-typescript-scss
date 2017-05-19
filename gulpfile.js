var gulp = require("gulp");
var sass = require("gulp-sass");
var ts = require("gulp-typescript");
var uglify = require("gulp-uglify");

var tsProject = ts.createProject("tsconfig.json");

gulp.task("ts", function () {
    gulp.src("src/**/*.ts")
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task("sass", function() {
    gulp.src("src/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist"));
});

gulp.task("js", function() {
    gulp.src("src/**/*.js")
        .pipe(gulp.dest("dist"));
});

gulp.task("css", function() {
    gulp.src("src/**/*.css")
        .pipe(gulp.dest("dist"));
});

gulp.task("html", function() {
    gulp.src("src/**/*.html")
        .pipe(gulp.dest("dist"));
});

gulp.task("live_transpiler", function() {
    gulp.watch("src/**/*.scss", ["sass"]);
    gulp.watch("src/**/*.ts", ["ts"]);
    gulp.watch("src/**/*.css", ["css"]);
    gulp.watch("src/**/*.js", ["js"]);
    gulp.watch("src/**/*.html", ["html"]);
});

gulp.task("default", ["ts", "sass"], function() {
    gulp.src("dist/**/*.js")
        .pipe(uglify({
            output: {
                comments: "license"
            }
        }))
        .pipe(gulp.dest("dist"));
});
