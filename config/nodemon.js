const { resolve } = require('path')

const paths = require('./paths')

module.exports = {
  script: resolve(paths.server, 'index.js'),
  watch: [paths.server, paths.config],
  ext: 'js,json'
}
