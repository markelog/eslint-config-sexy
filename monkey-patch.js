'use strict';

const Module = require('module');
const path = require('path');

let eslintLoc;
let parent = module;
while (parent) {
  try {
    eslintLoc = Module._resolveFilename('eslint', parent);
    break;
  } catch (err) {
    ({ parent } = parent);
  }
}
if (!eslintLoc) {
  throw new ReferenceError("couldn't resolve eslint");
}

const pluginPath = path.resolve(eslintLoc, '..', 'config', 'plugins.js');

const plugins = require(pluginPath);
const oldLoad = plugins.prototype.load;
let myPlugins = [];

plugins.prototype.load = function load(...args) {
  const pluginName = args[0];

  if (myPlugins.indexOf(pluginName) === -1) {
    return oldLoad.apply(this, args);
  }

  this.define(pluginName, require(`eslint-plugin-${pluginName}`));
};

module.exports = {
  addPlugins(additions) {
    myPlugins = myPlugins.concat(additions);
  }
};
