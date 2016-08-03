var loaders = require("./loaders");
var webpack = require('webpack');
var common = require('./common');
var path = require('path');
var fs = require('fs');
// var CleanWebpackPlugin = require('clean-webpack-plugin');

common.resolve.alias = {
    config: path.join(__dirname, '../src/config', 'develop.js')
}

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });


module.exports = {
    entry: common.entry,
    output: common.output,
    resolve: common.resolve,
    target: "node",
    resolveLoader: {
        modulesDirectories: ["node_modules"]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(
        //     {
        //         warning: false,
        //         mangle: false,
        //         comments: false
        //     }
        // ),
        // new webpack.ProvidePlugin({
        // }),
        // new CleanWebpackPlugin([common.output.path], {
        //     root: process.cwd(),
        //     verbose: true
        // })
    ],
    module:{
        loaders: loaders
    },
    // externals: nodeModules
};