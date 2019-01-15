module.exports = function(gulp, plugins, config, state)
{
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
            .pipe(plugins.sassGlob())
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.sass(config.css.opts)
                  .on("error", plugins.sass.logError))
            .pipe(gulp.dest(dest))
            .pipe(plugins.cssnano())
            .pipe(plugins.sourcemaps.write("./maps"))
            .pipe(plugins.rename(function(path) {
                path.basename += ".min";
            }))
            .pipe(gulp.dest(dest))
            .pipe(plugins.connect.reload());

        return stream;
    };
};
