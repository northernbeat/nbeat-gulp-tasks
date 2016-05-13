module.exports = function(gulp, plugins, config)
{
    var src = config.main.dest + "/*.html";
    
    return function()
    {
        return gulp.src(src)
            .pipe(plugins.debug({title: "Validate, input:"}))
            .pipe(plugins.html())
    }
};
