<p>
  <a href="http://www.northernbeat.no/">
    <img src="http://www.northernbeat.no/wp-content/themes/NorthernBeat3/img/logo.svg">
  </a>
</p>

[![npm version](https://badge.fury.io/js/%40northernbeat%2Fgulp-tasks.svg)](https://badge.fury.io/js/%40northernbeat%2Fgulp-tasks)

## What is this package?

This package contains a set of Gulp tasks used in Northern Beat
prototype and frontend development projects, exposed through a custom
Undertaker registry. We only ever use them through the NPM package
`@northernbeat/prototype`, so there may be some tie-ins that make them
less than optimal for standalone usage.

- **assets** - Copy configured lists of assets (fonts, images, favicons, etc.) from their given location to the proper location inside the build directory.
- **build-jquery-plugins** - Build script for our jQuery plugins.
- **clean** - Empties the build directory.
- **config** - Dump/debug the current project config.
- **sass** - Build CSS files from SASS project.
- **twig** - Run HTML template generation using Twig.
- **watch** - Helper task for running gulp watch on the project.
- **webserver** - Fire up a webserver with the build directory as the document root.
