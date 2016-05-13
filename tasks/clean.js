module.exports = function(gulp, plugins, config)
{
    var path = config.main.dest + "**/*";
    
    return function()
    {
        plugins.del([path]);
        plugins.util.log("Deleted content in " + config.main.dest);
    };
};
