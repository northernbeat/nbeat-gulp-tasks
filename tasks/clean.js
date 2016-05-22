module.exports = function(gulp, plugins, config)
{
    var path = config.build.dest + "**/*";
    
    return function()
    {
        plugins.del([path]);
        plugins.util.log("Deleted content in " + config.build.dest);
    };
};
