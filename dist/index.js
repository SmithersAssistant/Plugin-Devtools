'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _electron = require('electron');

var app = _electron.remote.app;
var getCurrentWindow = _electron.remote.getCurrentWindow;

exports.default = function (robot) {

  robot.listen(/^restart$/, {
    description: "Restart",
    usage: 'restart'
  }, function () {
    restart();
  });

  robot.listen(/^open devtools$/, {
    description: 'Open the chrome dev tools',
    usage: 'open devtools'
  }, function () {
    getCurrentWindow().openDevTools();
  });

  robot.listen(/^close devtools$/, {
    description: 'Close the chrome dev tools',
    usage: 'close devtools'
  }, function () {
    getCurrentWindow().closeDevTools();
  });

  robot.listen(/^toggle devtools$/, {
    description: 'Toggle the chrome dev tools',
    usage: 'toggle devtools'
  }, function () {
    getCurrentWindow().toggleDevTools();
  });

  robot.listen(/^quit$/, {
    description: 'Close the application',
    usage: 'quit'
  }, function () {
    app.quit();
  });

  robot.listen(/^refresh$/, {
    description: 'Refresh the window',
    usage: 'refresh'
  }, function () {
    window.location.reload();
  });
};