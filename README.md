<p>
  <a href="http://www.northernbeat.no/">
    <img src="http://www.northernbeat.no/wp-content/themes/NorthernBeat3/img/logo.svg">
  </a>
</p>

## What is this package?

This package contains a common set of tasks/scripts for the gulp
build/automation system, simplifying prototype development across
different projects.

- **clean** - Empties the build directory.
- **copy-assets** - Copy configured lists of assets (fonts, images, favicons, etc.) from their given location to the proper location inside the build directory.
- **metalsmith** - Run HTML template generation using Metalsmith.
- **sass** - Build CSS files from SASS project.
- **svg** - Build SVG sprites from a directory of SVG files (WiP)
- **validate-html** - Run VNU validator on HTML files in build directory.
- **watch** - Helper task for running gulp watch on the project.

## Documentation

We normally use these tasks in combination with a standard
`gulpfile.js` and a configurable `config.json`.

### Sample `gulpfile.js`
```js
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
```

### Sample `config.json` ###

```js
{
    "main": {
        "dest": "build"
    },

    "nbeat": {
        "gulp": "./node_modules/nbeat-sass-tasks/tasks"
    },
    
    "gulp": {
        "loadPlugins": {
            "pattern": ["gulp-*",
                        "gulp.",
                        "debug",
                        "del",
                        "nano",
                        "metalsmith-*"]
        }
    },

    "metalsmith": {
        "engine":    "swig",
        "src":       "src/html/pages/**/*",
        "templates": "src/html/templates",
        "metadata": {
            "global": "var/data.json"
        }
    },
    "sass": {
        "src":  "src/scss/*.scss",
        "dest": "/css",
        "opts": {
            "includePaths": ["./node_modules",
                             "./github/bootstrap/scss",
                             "./nbeat/scss/nbeat"
                            ],
            "Sourcemap": true,
            "omitSourceMapUrl": true,
            "outFile": "./build/css/site.map"
        }
    },
    "assets": {
        "images": {
            "dest": "/img",
            "src": ["src/img/**/*",
                    "./nbeat/img/icons/*.svg"
                   ]
        },
        "fonts": {
            "dest": "/fonts",
            "src": ["src/fonts/**/*"]
        },
        "css": {
            "dest": "/css",
            "src": []
        },
        "favicon": {
            "dest": "/",
            "src": ["src/favicon/**/*"]
        },
        "js": {
            "dest": "/js",
            "src": ["src/js/**/*",
                    "./github/bootstrap/dist/js/bootstrap.min.js",
                    "./nbeat/js/**/*",
                    "node_modules/jquery/dist/jquery.min.js",
                    "node_modules/masonry-layout/dist/*.min.js"
                   ]
        }
    }
}
```
