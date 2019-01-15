module.exports = function(gulp, plugins, config)
{

    return function()
    {
        return gulp
            .src(config.stylelint.src)
            .pipe(plugins.stylelint(config.stylelint.opts));
    };
};
