const gulp      = require("gulp");
const stylelint = require("gulp-stylelint");

module.exports = function(done)
{
    let config = this.config;

    let stream = gulp.src(config.css.lint.src, {allowEmpty: true})
        .pipe(stylelint(config.css.lint.opts));

    return stream;
};
