var gulp = require("gulp");
var sass = require("gulp-sass");
var ts = require("gulp-typescript");
var cleanCSS = require("gulp-clean-css");
var uglify = require("gulp-uglify");

var tsProject = ts.createProject("tsconfig.json");

gulp.task("ts", function () {
    gulp.src("src/js/**/*.ts", { base: "src/"} )
        .pipe(tsProject())
        .js
        .pipe(uglify())
        .pipe(gulp.dest("dist"));
});

gulp.task("js", function() {
    gulp.src("src/js/**/*.js", { base: "src/"} )
        .pipe(uglify())
        .pipe(gulp.dest("dist"));
});

gulp.task("sass", function() {
    gulp.src("src/css/**/*.scss", { base: "src/"} )
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(gulp.dest("dist"));
});

gulp.task("css", function() {
    gulp.src("src/css/**/*.css", { base: "src/"} )
        .pipe(cleanCSS())
        .pipe(gulp.dest("dist"));
});

gulp.task("html", function() {
    gulp.src("src/*.html", { base: "src/"} )
        .pipe(gulp.dest("dist"));
});

gulp.task("lib", function() {
    gulp.src("src/lib/**/*.*", { base: "src/lib"} )
        .pipe(gulp.dest("dist/lib"));
});

gulp.task("live_transpiler", function() {
    gulp.watch("src/**/*.scss", ["sass"]);
    gulp.watch("src/**/*.css", ["css"]);
    gulp.watch("src/**/*.ts", ["ts"]);
    gulp.watch("src/**/*.js", ["js"]);
    gulp.watch("src/**/*.html", ["html"]);
});

gulp.task("default", ["sass", "css", "ts", "js", "html", "lib"], function() {
    
});
