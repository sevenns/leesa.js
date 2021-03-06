const webpack = require('webpack')
const { resolve } = require('path')
const merge = require('webpack-merge')
const FriendlyErrors = require('friendly-errors-webpack-plugin')
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')

const base = require('./base')
const paths = require('../paths')
const moduleExists = require('../../helpers/module-exists')

const defaultRules = [{
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        config: {
          path: resolve(paths.leesa)
        }
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
          config: {
            path: resolve(paths.leesa)
          }
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
    new FriendlyErrors({ clearConsole: true }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new SimpleProgressWebpackPlugin()
  ]
})
