const debug    = require("gulp-debug");
const gulp     = require("gulp");
const log      = require("fancy-log");
const uglify   = require("gulp-uglify");
const concat   = require("gulp-concat");
const rename   = require("gulp-rename");

module.exports = function(done)
{
    const config = this.config;
    let src      = config.js.src || "./src/js/**/*.js";
    let dest     = "dist/js/";
    let filename = config.js.filename || "combined";

    if (config.system.dest !== undefined && config.js.dest !== undefined) {
        dest = config.system.dest + config.js.dest;
    }

    let stream = gulp.src(src)
        .pipe(concat(filename + ".js"))
        .pipe(gulp.dest(dest))
        .pipe(rename(filename + ".min.js"))
        .pipe(uglify())
        .pipe(gulp.dest(dest));

    stream = stream.pipe(debug());

    return stream;
}
