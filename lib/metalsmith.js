module.exports = function(gulp, plugins, config, state)
{
    let srcHtml      = "src/html/pages/**/*";
    let srcTemplates = "src/html/templates";
    let srcMetadata  = "var/";
    let dest         = "build/";

    let optsLayouts = {
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

        stream = stream.pipe(plugins.metalsmith({
            use: [
                plugins.metalsmithPackagejson(),
                plugins.northernbeat.metalsmithJsonmeta(srcMetadata),
                plugins.metalsmithLayouts(optsLayouts),
                plugins.metalsmithJstransformer()
            ]
        }));

        stream = stream.pipe(gulp.dest(dest));

        if (state.webserverRunning == true) {
            stream = stream.pipe(plugins.connect.reload());
        }
            
        return stream;
    }
};
