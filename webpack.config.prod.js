const {merge} = require('webpack-merge');
const common = require('./webpack.config.common.js');
var webpack = require('webpack');

module.exports = merge(common,{
  mode:'production',
  entry: [
    './client/App'
  ],
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ]
});
