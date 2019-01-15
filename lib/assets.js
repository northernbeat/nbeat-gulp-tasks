module.exports = function(gulp, config, state)
{
    let debug   = require("gulp-debug");
    let connect = require("gulp-connect");

    let assets    = config.assets || {};
    let dest      = "./build";
    let debugOpts = { title: "Asset",
                      showCount: false };

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
                        stream = stream.pipe(debug(debugOpts));
                    }

                    return stream;
                });
            }
        }

        if (state.webserverRunning == true) {
            connect.reload();
        }

        done();
    }
};
