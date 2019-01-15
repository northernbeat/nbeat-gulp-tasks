module.exports = function(gulp, plugins, config, state)
{
    let dest = "./build";
    let log = require("fancy-log");

    if (config.system.dest) {
        dest = config.system.dest;
    }


    
    return function(done)
    {
        var delPath = dest + "**/*";

        plugins.del([delPath]);
        log("Deleted content in " + dest);

        if (state.webserverRunning == true) {
            plugins.connect.reload();
        }

        done();
    };
};
