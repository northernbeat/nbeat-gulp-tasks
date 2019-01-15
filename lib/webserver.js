module.exports = function(gulp, plugins, config, state)
{
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
        plugins.connect.server(opts);

        done();
    };
};
