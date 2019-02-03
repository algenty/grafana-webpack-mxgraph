const path = require('path');
const webpack = require('webpack');
const fs = require("fs");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ExtractTextPluginBase = new ExtractTextPlugin('./css/flowchart.css');

module.exports = {
  target: 'node',
  context: path.resolve('src'),
  entry: './module.js',
  output: {
    filename: "module.js",
    path: path.resolve('dist'),
    libraryTarget: "amd"
  },
  externals: [
    // remove the line below if you don't want to use buildin versions
    'jquery', 'lodash', 'moment',
    function(context, request, callback) {
      var prefix = 'grafana/';
      if (request.indexOf(prefix) === 0) {
        return callback(null, request.substr(prefix.length));
      }
      callback();
    }

  ],
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CopyWebpackPlugin([{
        from: 'plugin.json'
      },
      {
        from: 'partials/*'
      },
      {
        from: 'img/*'
      }
    ]),
    ExtractTextPluginBase,
    new webpack.DefinePlugin({
      mxLoadResources: false,
    })
  ],
  resolve: {
    alias: {
      'src': path.resolve('src'),
      // 'mxgraph' : path.resolve(__dirname, 'externals/mxgraph/javascript/dist/build'),
      //'mxgraph' : path.resolve(__dirname, 'externals/mxgraph/javascript/src/js/mxClient'),
      //'mxgraph' : path.resolve(__dirname, 'externals/mxgraph-js/javascript/mxClient'),
      'mxgraph' : path.resolve(__dirname, 'node_modules/mxgraph-js/dist/mxgraph-js'),
      'mxgraph-mxBasePath' : path.resolve(__dirname, 'node_modules/mxgraph/javascript/src'),
      'mxgraph-mxImageBasePath' : path.resolve(__dirname, 'node_modules/mxgraph/javascript/src/images')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(s?)css$/,
        use: ExtractTextPluginBase.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  }
}
