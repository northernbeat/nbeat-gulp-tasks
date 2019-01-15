module.exports = function(gulp, plugins, config, state)
{
    let reg = gulp.registry();
    let log = require("fancy-log");

    
    return function(done)
    {
        for (let task in config.watch) {
            let src = config.watch[task];
            
            if (config.watch.hasOwnProperty(task) && reg.get(task) !== undefined) {
                gulp.watch(src, gulp.series(task));
                
                if (config.system.debug) {
                    log("Started watch for " + task);
                }
            }
        }

        done();
    };
};
