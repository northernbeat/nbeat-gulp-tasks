const gulp = require("gulp");
const log  = require("fancy-log");

module.exports = function(done)
{
    let config = this.config;
    let state  = this.state;
    let reg    = gulp.registry();

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
