const debug = require("gulp-debug");
const gulp  = require("gulp");
const log   = require("fancy-log");
const zip   = require("gulp-zip");

module.exports = function(done)
{
    const config = this.config;
    let src      = config.dist.zip.src || "./build";
    let dest     = config.dist.zip.dest || "./dist";
    let filename = config.dist.zip.filename || "./project.zip";

    let stream = gulp.src(src)
                .pipe(zip(filename))
                .pipe(gulp.dest(dest));

    stream = stream.pipe(debug());

    return stream;
}
