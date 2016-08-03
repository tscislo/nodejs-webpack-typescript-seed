var loaders = require("./loaders");
var webpack = require('webpack');
module.exports = {
  resolve: {
    root: __dirname,
    extensions: ['', '.ts', '.js', '.json']
  },
  resolveLoader: {
    modulesDirectories: ["node_modules"]
  },
  devtool: "source-map-inline",
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.jquery': 'jquery',
      '_': 'lodash',
      lodash: 'lodash'
    })
  ],
  module: {
    loaders: loaders,
    postLoaders: [
      {
        test: /^((?!\.spec\.ts).)*.ts$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'istanbul-instrumenter'
      }
    ]
  }
};

