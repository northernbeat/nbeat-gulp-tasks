module.exports = function(gulp, plugins, config)
{
    var es     = require("event-stream");
    var header = plugins.wpstylecss();
    var dest   = config.build.dest + config.sass.dest;
    
    return function()
    {
        config.sass.opts.includePaths.unshift("node_modules/@eirikref/nbeat-sass/scss/");

        var css = gulp.src(config.sass.src)
                  .pipe(plugins.sass(config.sass.opts)
                        .on("error", plugins.sass.logError))
                  .pipe(gulp.dest(dest))
                  .pipe(plugins.cssnano());

        return es.merge(header, css)
            .pipe(plugins.concat("style.css"))
            .pipe(gulp.dest(dest)); 
    };
};
