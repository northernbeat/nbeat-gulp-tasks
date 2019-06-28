const cleanCss   = require("gulp-clean-css");
const connect    = require("gulp-connect");
const debug      = require("gulp-debug");
const gulp       = require("gulp");
const log        = require("fancy-log");
const rename     = require("gulp-rename");
const sass       = require("gulp-sass");
const sassGlob   = require("gulp-sass-glob");
const sourcemaps = require("gulp-sourcemaps");

module.exports = function(done)
{
    let config = this.config;
    let state  = this.state;
    let src    = "./src/scss";
    let dest   = "./build/css";

    if (config.css.src !== undefined) {
        src = config.css.src;
    }

    if (config.system.dest !== undefined && config.css.dest !== undefined) {
        dest = config.system.dest + config.css.dest;
    }

    let stream = gulp.src(src, {allowEmpty: true})
        .pipe(sassGlob())
        .pipe(sourcemaps.init())
        .pipe(sass(config.css.opts)
              .on("error", sass.logError))
        .pipe(gulp.dest(dest))
        .pipe(cleanCss())
        .pipe(sourcemaps.write("./maps"))
        .pipe(rename(function(path) {
            path.basename += ".min";
        }))
        .pipe(gulp.dest(dest))
        .pipe(connect.reload());

    return stream;
};
