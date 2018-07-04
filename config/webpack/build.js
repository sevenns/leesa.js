const { resolve } = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const FriendlyErrors = require('friendly-errors-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const moduleExists = require('../../helpers/module-exists')
const paths = require('../paths')
const base = require('./base')

const defaultRules = [
  {
    test: /\.pug$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'html/[path][name].html',
          context: paths.views
        }
      },
      {
        loader: 'pug-html-loader',
        options: {
          basedir: paths.client,
          pretty: true
        }
      }
    ],
  },

  {
    test: /\.css$/,
    use: [
      MiniCssExtractPlugin.loader,
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
  }
]

if (moduleExists('sass-loader') && moduleExists('node-sass')) {
  defaultRules.push({
    test: /\.sass$/,
    use: [
      MiniCssExtractPlugin.loader,
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
  mode: 'production',
  entry: {
    app: [resolve(paths.leesa, 'index.js')]
  },
  output: {
    path: `${paths.app}`,
    filename: 'scripts/[name].js',
    publicPath: paths.static
  },
  module: {
    rules: defaultRules
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: { ecma: 5 }
      }),
      new OptimizeCSSAssetsPlugin()
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: 'production',
      __DEV__: false
    }),
    new FriendlyErrors({
      clearConsole: false,
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles/app.css'
    }),
    new CopyWebpackPlugin([
      {
        from: paths.static,
        to: paths.app
      }
    ])
  ]
})
