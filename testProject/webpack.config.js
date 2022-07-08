const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: () => '<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>Test Project</title></head><body><div id=\"app\"></div></body></html>',
      filename: 'index.html',
    })
  ],
  devServer: {
    'static': {
      directory: './dist'
    }
  }
};

module.exports = config;