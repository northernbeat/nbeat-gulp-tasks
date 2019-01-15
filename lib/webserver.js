module.exports = function(gulp, config, state)
{
    let connect = require("gulp-connect");
    let opts = {};

    if (config.system.dest) {
        opts.root = config.system.dest;
    }

    if (config.webserver.port) {
        opts.port = config.webserver.port;
    }

    if (config.webserver.reload) {
        opts.livereload = config.webserver.reload;
    }
    

    return function(done)
    {
        state.webserverRunning = true;
        connect.server(opts);

        done();
    };
};
