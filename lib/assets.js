const debug   = require("gulp-debug");
const connect = require("gulp-connect");
const log     = require("fancy-log");
const gulp    = require("gulp");

module.exports = function(done)
{
    let config    = this.config;
    let state     = this.state;
    let assets    = config.assets || {};
    let dest      = config.system.dest || "./build";
    let debugOpts = { title: "Asset",
                      showCount: false };
    
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
};
