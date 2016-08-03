var loaders = require("./loaders");
var plugins = require("./plugins");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var webpack = require('webpack');
var common = require('./common')
var path = require('path');

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
    devtool: "source-map",
    plugins: plugins.concat([
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.jquery': 'jquery',
            lodash: 'lodash'
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3003,
            server: { baseDir: ['build/timoCom'] }
        })
    ]),
    module:{
        loaders: loaders
    }
};