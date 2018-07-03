const { existsSync } = require('fs')
const { resolve } = require('path')

let userConfig = resolve('leesa.config.js')

if (existsSync(userConfig)) {
  // eslint-disable-next-line
  userConfig = require(userConfig)
}

module.exports = userConfig
