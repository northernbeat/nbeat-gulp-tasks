module.exports = function(gulp, config, state)
{
    let metalsmith    = require("gulp-metalsmith");
    let pkgJson       = require("metalsmith-packagejson");
    let jsonmeta      = require("@northernbeat/metalsmith-jsonmeta");
    let layouts       = require("metalsmith-layouts");
    let jsTransformer = require("metalsmith-jstransformer");
    let connect       = require("gulp-connect");
    let log           = require("gulp-debug");

    let srcHtml      = "src/html/pages/**/*";
    let srcTemplates = "src/html/templates";
    let srcMetadata  = "var/";
    let dest         = "build/";
    let optsLayouts  = {
        "directory": srcTemplates
    }

    if (config.system.dest) {
        dest = config.system.dest;
    }
    
    if (config.html.metadata) {
        srcMetadata = config.html.metadata;
    }


    
    return function()
    {
        let stream = gulp.src(srcHtml);

        stream = stream.pipe(metalsmith({
            use: [
                pkgJson(),
                jsonmeta(srcMetadata),
                layouts(optsLayouts),
                jsTransformer()
            ]
        }));

        stream = stream.pipe(gulp.dest(dest));

        if (state.webserverRunning == true) {
            stream = stream.pipe(connect.reload());
        }
            
        return stream;
    }
};
