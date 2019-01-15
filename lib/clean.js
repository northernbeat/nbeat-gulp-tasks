module.exports = function(gulp, config, state)
{
    let connect = require("gulp-connect");
    let del     = require("del");
    let log     = require("fancy-log");

    let dest    = "./build";

    if (config.system.dest) {
        dest = config.system.dest;
    }


    
    return function(done)
    {
        var delPath = dest + "**/*";

        del([delPath]);

        if (state.webserverRunning == true) {
            connect.reload();
        }

        if (config.system.debug) {
            log("Deleted content in " + dest);
        }

        done();
    };
};
