const config = require('./webpack.config.js')
const webpack = require('webpack')

config.plugins = [
  new webpack.optimize.UglifyJsPlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.DedupePlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env.GA_TRACKING_ID': JSON.stringify(process.env.GA_TRACKING_ID)
  })
]

module.exports = config
