const cleanCss   = require("gulp-clean-css");
const concat     = require("gulp-concat");
const debug      = require("gulp-debug");
const es         = require("event-stream");
const gulp       = require("gulp");
const log        = require("fancy-log");
const sass       = require("gulp-sass");
const sassGlob   = require("gulp-sass-glob");
const wpStyle    = require("gulp-wpstylecss");

module.exports = function(done)
{
    let config        = this.config;
    let state         = this.state;
    let src           = "./src/sass/wordpress.scss";
    let dest          = "./build/css";
    let opts          = {};
    let globOpts      = {};
    let optimizerOpts = {};
    let header        = wpStyle();

    if (config.wordpress.css !== undefined) {
        src = config.css.src;
    }

    if (config.system.dest !== undefined && config.css.dest !== undefined) {
        dest = config.system.dest + config.css.dest;
    }

    if (config.css.opts !== undefined) {
        opts = config.css.opts;
    }

    if (config.css.globOpts !== undefined) {
        globOpts = config.css.globOpts;
    }

    if (config.css.optimizerOpts !== undefined) {
        optimizerOpts = config.css.optimizerOpts;
    }

    let stream = gulp.src(src, {allowEmpty: true})
        .pipe(sassGlob(globOpts))
        .pipe(sass(opts)
              .on("error", sass.logError))
        .pipe(cleanCss(optimizerOpts))
        // .pipe(gulp.dest(dest));

    stream = es.merge(header, stream)
        .pipe(concat("style.css"))
        .pipe(gulp.dest(dest));

    return stream;
};
