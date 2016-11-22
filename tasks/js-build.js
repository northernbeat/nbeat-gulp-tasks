module.exports = function(gulp, plugins, config)
{
    return function()
    {
        if (!config.build.js instanceof Object) {
            plugins.gulpUtil.log("No build target, exiting.");
            return;
        }
        
        for (target in config.build.js) {
            if (config["build"]["js"][target]["src"] instanceof Array && config["build"]["js"][target]["dest"]) {
                return gulp.src(config["build"]["js"][target]["src"])
                    .pipe(plugins.concat(config["build"]["js"][target]["dest"]))
                    .pipe(gulp.dest(config.build.dest))
                    .pipe(plugins.debug({title: "JS, out:"}))
                
                // .pipe(plugins.uglify())
                // .pipe(plugins.rename(function(path) {
                // path.basename += ".min";
                // }))
                // .pipe(gulp.dest(config.build.dest))
                // .pipe(plugins.debug({title: "JS, out:"}))
            }
        }
    }
};
