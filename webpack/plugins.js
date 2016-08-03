var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var common = require('./common')

module.exports = [
    new CopyWebpackPlugin([
        {
            from: './src/res/manifest.json',
            to: common.plugin.name
        },
        {
            from: './src/res/icon16.png',
            to: common.plugin.name
        },
        {
            from: './src/res/icon48.png',
            to: common.plugin.name
        },
        {
            from: './src/res/icon128.png',
            to: common.plugin.name
        },
    ]),
    new CopyWebpackPlugin([
        {
            from: './src/app/timoCom/files',
            to: 'timoCom/files'
        }
    ]),
    new HtmlWebpackPlugin(
        {
            chunks: [common.plugin.name + '/background'],
            template: './src/app/background/background.ejs',
            filename: common.plugin.name + '/background.html',
            inject: false,
            hash: true
        }),
    new HtmlWebpackPlugin(
        {
            chunks: [common.plugin.name + '/popup'],
            template: './src/app/popup/popup.ejs',
            filename: common.plugin.name + '/popup.html',
            inject: false,
            hash: true
        }
    ),
    new HtmlWebpackPlugin(
        {
            chunks: ['timoCom/timoCom'],
            template: './src/app/timoCom/timoCom.ejs',
            filename: 'timoCom/index.html',
            inject: 'body',
            hash: true
        }
    )
];
