module.exports = function(gulp, plugins, config)
{
    return function()
    {
        return gulp
            .src(config.specGraph.src)
            .pipe(plugins.specificityGraph(config.specGraph.opts));
    };
};
