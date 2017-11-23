"use strict";

var gulp    = require("gulp");
var config  = require("./nbeat.json");
var plugins = require("gulp-load-plugins")(config.gulp.loadPlugins);

// console.log(connect);

gulp.task("default", ["html", "css", "assets", "svg"]);
gulp.task("qa",      ["stylelint", "spec-graph"]);
gulp.task("doc",     ["styleguide"]);
gulp.task("dev",     ["default", "webserver", "watch"]);
    
gulp.task("clean",      require(config.nbeat.gulp + "/clean")(gulp, plugins, config));
gulp.task("html",       require(config.nbeat.gulp + "/metalsmith")(gulp, plugins, config));
gulp.task("css",        require(config.nbeat.gulp + "/sass")(gulp, plugins, config));
gulp.task("stylelint",  require(config.nbeat.gulp + "/stylelint")(gulp, plugins, config));
gulp.task("svg",        require(config.nbeat.gulp + "/svg")(gulp, plugins, config));
gulp.task("watch",      require(config.nbeat.gulp + "/watch")(gulp, plugins, config));
gulp.task("assets",     require(config.nbeat.gulp + "/copy-assets")(gulp, plugins, config));
gulp.task("webserver",  require(config.nbeat.gulp + "/webserver")(gulp, plugins, config));
gulp.task("spec-graph", require(config.nbeat.gulp + "/spec-graph")(gulp, plugins, config));
gulp.task("styleguide", require(config.nbeat.gulp + "/styleguide")(gulp, plugins, config));
