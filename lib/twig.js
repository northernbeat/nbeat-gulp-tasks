module.exports = function(gulp, config, state)
{
    let connect = require("gulp-connect");
    let debug   = require("gulp-debug");
    let log     = require("fancy-log");
    let tidy    = require("gulp-htmltidy");
    let twig    = require("gulp-twig");

    let srcHtml  = config.html.src || "src/html/pages/**/*";
    let dest     = config.system.dest || "build/";
    let twigOpts = config.html.twig || {};
    let tidyOpts = config.html.tidy || {};



    return function(done)
    {
        let stream = gulp.src(srcHtml)
            .pipe(twig(twigOpts))
            .pipe(tidy(tidyOpts))
            .pipe(gulp.dest(dest));
        
        if (state.webserverRunning == true) {
            stream = stream.pipe(connect.reload());
        }
        
        return stream;
    }
};
