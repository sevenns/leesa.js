const { resolve } = require('path')

const config = require('./leesa')

const root = resolve(process.cwd())
const rootDir = config && config.dirs ? config.dirs.src : '.'
const buildDir = config && config.dirs ? config.dirs.build : 'app'
const viewsDir = config && config.dirs ? config.dirs.views : 'views'
const leesa = resolve(__dirname, '..')
const client = resolve(root, rootDir)

module.exports = {
  root,
  leesa,
  client,
  views: resolve(root, viewsDir),
  server: resolve(leesa, 'server'),
  app: resolve(root, buildDir),
  static: resolve(root, 'static'),
  images: resolve(root, 'static/images'),
  config: resolve(__dirname)
}
