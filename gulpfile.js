var gulp = require("gulp");
var sass = require("gulp-sass");
var ts = require("gulp-typescript");
var uglify = require("gulp-uglify");

var tsProject = ts.createProject("tsconfig.json");

gulp.task("ts", function () {
    gulp.src("src/**/*.ts", { base: "src/"} )
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task("sass", function() {
    gulp.src("src/**/*.scss", { base: "src/"} )
        .pipe(sass())
        .pipe(gulp.dest("dist"));
});

gulp.task("js", function() {
    gulp.src("src/**/*.js", { base: "src/"} )
        .pipe(gulp.dest("dist"));
});

gulp.task("css", function() {
    gulp.src("src/**/*.css", { base: "src/"} )
        .pipe(gulp.dest("dist"));
});

gulp.task("html", function() {
    gulp.src("src/**/*.html", { base: "src/"} )
        .pipe(gulp.dest("dist"));
});

gulp.task("live_transpiler", function() {
    gulp.watch("src/**/*.scss", ["sass"]);
    gulp.watch("src/**/*.css", ["css"]);
    gulp.watch("src/**/*.ts", ["ts"]);
    gulp.watch("src/**/*.js", ["js"]);
    gulp.watch("src/**/*.html", ["html"]);
});

gulp.task("default", ["ts", "sass", "css", "js", "html"], function() {
    // TODO: ?
});
