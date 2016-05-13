module.exports = function(gulp, plugins, config)
{
    // var util = require("gulp-util");

    return function()
    {
        if (!config.assets instanceof Object) {
            plugins.gulpUtil.log("No assets, exiting.");
            return;
        }
        
        for (type in config.assets) {
            if (config["assets"][type]["src"] instanceof Array && config["assets"][type]["dest"]) {
                config["assets"][type]["src"].forEach(function(a) {
                    return gulp.src(a)
                        .pipe(gulp.dest(config.main.dest + config["assets"][type]["dest"]))
                        .pipe(plugins.debug({title: "Asset, " + type + ":"}))
                });
            }
        }
    }
};
