var loaders = require("./loaders");
var common = require('./common');
var path = require('path');
var fs = require('fs');

common.resolve.alias = {
    config: path.join(__dirname, '../src/config', 'develop.js')
}

module.exports = {
    entry: common.entry,
    output: common.output,
    resolve: common.resolve,
    target: "node",
    resolveLoader: {
        modulesDirectories: ["node_modules"]
    },
    module:{
        loaders: loaders
    },
};