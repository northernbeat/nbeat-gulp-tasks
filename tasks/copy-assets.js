module.exports = function(gulp, plugins, config)
{
    return function()
    {
        if (!config.assets instanceof Object) {
            plugins.util.log("No assets, exiting.");
            return;
        }
        
        for (type in config.assets) {
            if (config["assets"][type]["src"] instanceof Array && config["assets"][type]["dest"]) {
                config["assets"][type]["src"].forEach(function(a) {
                    return gulp.src(a)
                        .pipe(gulp.dest(config.build.dest + config["assets"][type]["dest"]))
                        .pipe(plugins.debug({title: "Asset, " + type + ":"}))
                });
            } else {
                plugins.util.log("Cannot process: " + type);
            }
        }
    }
};
