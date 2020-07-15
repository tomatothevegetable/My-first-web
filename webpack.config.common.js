var path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    
  ],
  module: {
    loaders:[
      {
        test: /\.js[x]?$/,
        loaders: ['babel'],
        exclude: /(node_modules|bower_components)/
      }, {
        test: /\.css$/,
        loaders: ['style', 'css','postcss']
      }, {
        test: /\.s(a|c)ss$/,
        loaders: ['style', 'css', 'postcss', 'sass']
      },
      {
        test: /\.(wav|jpeg|png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options:{
          name: '[name].[hash:8].[ext]'
        }
      }
    ]
  }
};