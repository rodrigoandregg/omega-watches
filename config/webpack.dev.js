const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const devConfig = {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    allowedHosts: path.join(__dirname, '../dist'),
    port: 5173,
  },
  plugins: [new ReactRefreshWebpackPlugin()],
  module: {
    rules: [
      {
        use: ['style-loader', 'css-loader', 'sass-loader'],
        test: /.(css|sass|scss)$/,
      },
    ],
  },
}

module.exports = merge(common, devConfig)
