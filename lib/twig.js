const connect = require("gulp-connect");
const debug   = require("gulp-debug");
const gulp    = require("gulp");
const log     = require("fancy-log");
const twig    = require("gulp-twig");
const data    = require("gulp-data");

module.exports = function(done)
{
    let config   = this.config;
    let state    = this.state;
    let srcHtml  = config.html.src || "src/html/pages/**/*";
    let dest     = config.system.dest || "build/";
    let twigOpts = config.html.twig || {};
    let jsonData = config.data || null;

    let stream = gulp.src(srcHtml);

    if (jsonData) {
        stream = stream.pipe;
    }

    stream = stream.pipe(twig(twigOpts))
        .pipe(gulp.dest(dest));

    if (state.webserverRunning == true) {
        stream = stream.pipe(connect.reload());
    }

    return stream;
};
