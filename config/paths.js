const { resolve } = require('path')

const config = require('./leesa')

const root = resolve(process.cwd())
const leesa = resolve(__dirname, '..')
const client = resolve(root, config.rootDir)

module.exports = {
  root,
  leesa,
  client,
  views: resolve(client, 'views'),
  server: resolve(leesa, 'server'),
  app: resolve(root, 'app'),
  static: resolve(root, 'static'),
  images: resolve(root, 'static/images'),
  config: resolve(__dirname)
}
