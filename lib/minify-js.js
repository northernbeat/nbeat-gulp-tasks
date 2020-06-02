const debug    = require("gulp-debug");
const gulp     = require("gulp");
const log      = require("fancy-log");
const uglify   = require("gulp-uglify");
const pipeline = require('readable-stream').pipeline;

module.exports = function(done)
{
    const config = this.config;
    let src      = config.js.src || "./src/js/**/*.js";
    let dest     = config.js.dest || "./dist/js/combined.js";
    
    let stream = pipeline(
        gulp.src(src),
        uglify(),
        gulp.dest(dest)
    );
    
    stream = stream.pipe(debug());

    return stream;
}
