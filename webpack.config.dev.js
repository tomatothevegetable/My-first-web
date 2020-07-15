var path = require('path');
var webpack = require('webpack');


module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/App'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    
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
          name: '/static/media/[name].[hash:8].[ext]'
        }
      }
    ],
    rules:[
      
    ]
  }
};