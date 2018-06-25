const { existsSync } = require('fs')
const path = require('path')

const moduleExists = require('../../helpers/module-exists')
const paths = require('../paths')
const babelPreset = require('../../babel')

const defaultRules = []

module.exports = () => {
  const hasBabelRc = existsSync(path.resolve('.babelrc'))
  const babelOptions = {
    babelrc: true,
    cacheDirectory: true,
    presets: []
  }

  if (!hasBabelRc) {
    babelOptions.presets.push(babelPreset)
  }

  defaultRules.push({
    test: /\.(js)$/,
    exclude: [/node_modules/, paths.app],
    use: [
      {
        loader: 'babel-loader',
        options: babelOptions
      }
    ]
  })

  if (moduleExists('eslint') && moduleExists('eslint-loader')) {
    defaultRules.push({
      test: /\.(js)$/,
      exclude: [/node_modules/, paths.app],
      use: [
        {
          loader: 'babel-loader',
          options: babelOptions
        },
        'eslint-loader'
      ]
    })
  }

  return {
    resolve: {
      alias: {
        '~': paths.root,
        '~client': paths.client,
        '~app': paths.app,
        '~views': paths.views
      },

      extensions: ['.js']
    },
    node: {
      __filename: true,
      __dirname: true
    },
    module: {
      rules: defaultRules
    }
  }
}
