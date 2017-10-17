module.exports = function(gulp, plugins, config)
{
    // FIXME: Not working :/
    return function()
    {
        return gulp.task("kss", shell.task([
            "./node_modules/kss/bin/kss --config kss-config.json"
        ]));
    }
}
