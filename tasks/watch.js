module.exports = function(gulp, plugins, config)
{
    return function()
    {
        gulp.watch("src/favicon/**",     ["assets"]);
        gulp.watch("src/fonts/**",       ["assets"]);
        gulp.watch("src/html/**",        ["html"]);
        gulp.watch("src/img/**",         ["assets"]);
        gulp.watch("src/js/**",          ["assets"]);
        gulp.watch("src/scss/**/*.scss", ["css"]);
    };
};
