const app = __dirname
const path = require('path')
const webpack = require('webpack')
const combineLoaders = require('webpack-combine-loaders')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: app,
  entry: ['whatwg-fetch', './src/index.tsx'],
  output: {path: __dirname + "/dist/output", filename: 'app.bundle.js'},
  devtool: "source-map",
  resolve: {
    modules: [path.join(app, '/src'), 'node_modules'],
    extensions: ['*','.ts', '.js', '.jsx', '.tsx']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.otf$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        use: 'file-loader?name=[name].[ext]'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: './public/index.html',
      inject: false
    })
  ]
}
