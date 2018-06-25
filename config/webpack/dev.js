const { resolve } = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const FriendlyErrors = require('friendly-errors-webpack-plugin')

const moduleExists = require('../../helpers/module-exists')
const paths = require('../paths')
const base = require('./base')

const defaultRules = [{
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        path: resolve(paths.leesa, 'postcss.js')
      }
    }
  ]
}]

if (moduleExists('sass-loader') && moduleExists('node-sass')) {
  defaultRules.push({
    test: /\.sass$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          path: resolve(paths.leesa, 'postcss.js')
        }
      },
      'sass-loader'
    ]
  })
}

module.exports = merge(base(), {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  entry: {
    app: [
      'webpack-hot-middleware/client?noInfo=true&reload=true',
      resolve(paths.leesa, 'index.js')
    ]
  },
  output: {
    path: paths.static,
    filename: 'scripts/[name].js'
  },
  module: {
    rules: defaultRules
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: 'development',
      __DEV__: true
    }),
    new FriendlyErrors({
      clearConsole: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
})
