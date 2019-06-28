const debug      = require("gulp-debug");
const gulp       = require("gulp");
const log        = require("fancy-log");
const sassDoc    = require("sassdoc");
const sassGlob   = require("gulp-sass-glob");

module.exports = function(done)
{
    let config = this.config;
    let state  = this.state;
    let src    = config.css.src || "./src/css";
    let dest   = "./build/sassdoc";

    if (config.system.dest !== undefined) {
        dest = config.system.dest + "sassdoc";
    }

    let opts = {
        dest: dest
    };

    let stream = gulp.src(src, {allowEmpty: true})
        .pipe(sassGlob())
        .pipe(sassDoc(opts));

    return stream;
};
