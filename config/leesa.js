const { existsSync } = require('fs')
const { resolve } = require('path')

let userConfig = resolve('leesa.config.js')

if (existsSync(userConfig)) {
  // eslint-disable-next-line
  userConfig = require(userConfig)
} else {
  userConfig = {
    rootDir: '.'
  }
}

module.exports = userConfig
