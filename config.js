'use strict';

const path = require('path');

let config = {
  // Name of electron app
  // Will be used in production builds
  name: 'linkdood',

  // webpack-dev-server port
  port: 9080,
  icon16: path.join(__dirname, 'app/icons', 'icon16.png'),// jshint ignore:line

  // electron-packager options
  // Docs: https://simulatedgreg.gitbooks.io/electron-vue/content/docs/building_your_app.html
  building: {
    arch: 'x64',
    asar: true,
    dir: path.join(__dirname, 'app'),// jshint ignore:line
    icon: path.join(__dirname, 'app/icons/icon'),// jshint ignore:line
    ignore: /\b(node_modules|src|index\.ejs|icons)\b/,
    out: path.join(__dirname, 'builds'),// jshint ignore:line
    overwrite: true,
    platform: process.env.PLATFORM_TARGET || 'all'// jshint ignore:line
  }
};

config.building.name = config.name;

module.exports = config;
