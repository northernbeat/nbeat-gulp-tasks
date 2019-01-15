module.exports = function(gulp, config, state)
{
    let connect    = require("gulp-connect");
    let log        = require("gulp-debug");
    let sass       = require("gulp-sass");
    let sassGlob   = require("gulp-sass-glob");
    let sourcemaps = require("gulp-sourcemaps");
    let cleanCss   = require("gulp-clean-css");
    let rename     = require("gulp-rename");

    let src  = "./src/css";
    let dest = "./build/css";

    if (config.css.src) {
        src = config.css.src;
    }

    if (config.system.dest && config.css.dest) {
        dest = config.system.dest + config.css.dest;
    }


    
    return function(done)
    {
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
};
