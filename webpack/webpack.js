var loaders = require("./loaders");
var webpack = require('webpack');
var common = require('./common');
var path = require('path');
// var CleanWebpackPlugin = require('clean-webpack-plugin');

common.resolve.alias = {
    config: path.join(__dirname, '../src/config', 'develop.js')
}

module.exports = {
    entry: common.entry,
    output: common.output,
    resolve: common.resolve,
    resolveLoader: {
        modulesDirectories: ["node_modules"]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(
            {
                warning: false,
                mangle: false,
                comments: false
            }
        ),
        // new webpack.ProvidePlugin({
        // }),
        // new CleanWebpackPlugin([common.output.path], {
        //     root: process.cwd(),
        //     verbose: true
        // })
    ],
    module:{
        loaders: loaders
    }
};