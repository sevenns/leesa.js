const { existsSync } = require('fs')
const { resolve } = require('path')
const express = require('express')
const webpack = require('webpack')
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')

const leesaConfigPath = resolve('leesa.config.js')
const webpackConfig = require('../config/webpack/dev')
const router = require('./router')
const paths = require('../config/paths')

let compiler = webpack(webpackConfig)

if (existsSync(leesaConfigPath)) {
  /* eslint-disable-next-line */
  let leesaConfig = require(leesaConfigPath)

  if (leesaConfig.development) {
    compiler = webpack(leesaConfig.development(webpackConfig, webpack))
  }
}

module.exports = (app) => {
  app.use(devMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    logLevel: 'silent'
  }))

  app.use(hotMiddleware(compiler, {
    log: false,
    heartbeat: 2000
  }))

  app.use(express.static(paths.static))
  app.use('/', router)
}
