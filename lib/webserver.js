const connect = require("gulp-connect");
const cors    = require("cors");
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

    if (config.webserver.cors === true) {
        opts.middleware = function() {
            return [cors()];
        }
    }

    state.webserverRunning = true;
    connect.server(opts);

    done();
};
