module.exports = function(gulp, plugins, config, state)
{
    let assets = config.assets || {};
    let dest = "./build";

    if (config.system.dest) {
        dest = config.system.dest;
    }

    
    
    return function(done)
    {
        for (let targetdir in assets) {
            if (assets.hasOwnProperty(targetdir) && assets[targetdir] instanceof Array) {
                let sources = assets[targetdir];

                sources.forEach(function(s) {
                    let fullpath = dest + targetdir;
                    let stream   = gulp.src(s, {allowEmpty: true})
                        .pipe(gulp.dest(fullpath));
                    
                    if (config.system.debug) {
                        let debugOpts = { title: "Asset",
                                          showCount: false };
                        stream = stream.pipe(plugins.debug(debugOpts));
                    }

                    return stream;
                });
            }
        }

        if (state.webserverRunning == true) {
            plugins.connect.reload();
        }

        done();
    }
};
