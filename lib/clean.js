const connect = require("gulp-connect");
const del     = require("del");
const log     = require("fancy-log");

module.exports = function(done)
{
    let config  = this.config;
    let state   = this.state;
    let dest    = config.system.dest || "./build";
    let delPath = dest + "**/*";
    
    del([delPath]);
    
    if (state.webserverRunning == true) {
        connect.reload();
    }

    if (config.system.debug) {
        log("Deleted content in " + dest);
    }

    done();
};
