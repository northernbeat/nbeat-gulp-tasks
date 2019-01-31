const connect = require("gulp-connect");
const gulp    = require("gulp");
const log     = require("fancy-log");

module.exports = function(done)
{
    let config = this.config;
    let state  = this.state;
    let opts   = {};

    if (config.system.dest) {
        opts.root = config.system.dest;
    }

    if (config.webserver.port) {
        opts.port = config.webserver.port;
    }

    if (config.webserver.reload) {
        opts.livereload = config.webserver.reload;
    }
    
    state.webserverRunning = true;
    connect.server(opts);
    
    done();
};
