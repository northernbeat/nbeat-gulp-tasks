module.exports = function(gulp, plugins, config)
{
    var dest = config.main.dest + config.sass.dest;
    
    return function()
    {
        config.sass.opts.includePaths.unshift(config.main.base + "/scss/");

        return gulp
            .src(config.sass.src)
            // .pipe(plugins.sourcemaps.init())
            .pipe(plugins.debug({title: "Sass, input:"}))
            .pipe(plugins.sass(config.sass.opts)
                  .on("error", plugins.sass.logError))
            // .pipe(plugins.sourcemaps.write())
            .pipe(gulp.dest(dest))
            .pipe(plugins.debug({title: "Sass, output:"}))
            // .pipe(plugins.shorthand())
            .pipe(plugins.cssnano())
            .pipe(plugins.rename(function(path) {
                path.basename += ".min";
            }))
            .pipe(gulp.dest(dest))
            .pipe(plugins.debug({title: "Sass, output:"}))
    };
};
