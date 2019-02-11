const debug  = require("gulp-debug");
const gulp   = require("gulp");
const concat = require("gulp-concat");
const minify = require("gulp-minify");

module.exports = function(done)
{
    let src      = this.config.build.jquery.src || "./src/*.js";
    let destDir  = this.config.system.dest || "dest/";
    let destFile = this.config.build.jquery.dest || "jquery.nbeat.js";
    let opts     = {
        ext: {
            min: ".min.js"
        }
    };
    
    let stream = gulp.src(src, {allowEmpty: true});

    let raw = stream.pipe(gulp.dest(destDir))
        .pipe(concat(destFile))
        .pipe(gulp.dest(destDir));

    let minified = stream.pipe(minify(opts))
        .pipe(gulp.dest(destDir))
        .pipe(concat(destFile))
        .pipe(minify(opts))
        .pipe(gulp.dest(destDir));

    done();
};
