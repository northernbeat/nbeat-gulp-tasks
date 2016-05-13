"use strict";

var gulp    = require("gulp");
var config  = require("./config.json");
var plugins = require("gulp-load-plugins")(config.gulp.loadPlugins);
    
gulp.task("default", ["html", "css", "assets"]);
    
gulp.task("clean",  require(config.nbeat.gulp + "/clean")(gulp, plugins, config));
gulp.task("html",   require(config.nbeat.gulp + "/metalsmith")(gulp, plugins, config));
gulp.task("css",    require(config.nbeat.gulp + "/sass")(gulp, plugins, config));
gulp.task("watch",  require(config.nbeat.gulp + "/watch")(gulp, plugins, config));
gulp.task("assets", require(config.nbeat.gulp + "/copy-assets")(gulp, plugins, config));
