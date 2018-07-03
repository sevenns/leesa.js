const { existsSync } = require('fs')
const { resolve } = require('path')

const leesaConfigPath = resolve('leesa.config.js')
let serverHost = process.env.HOST || 'localhost'
let serverPort = process.env.PORT || 8080

if (existsSync(leesaConfigPath)) {
  /* eslint-disable-next-line */
  let leesaConfig = require(leesaConfigPath)

  if (leesaConfig && leesaConfig.server) {
    if (leesaConfig.server.host) {
      serverHost = leesaConfig.server.host
    }

    if (leesaConfig.server.port) {
      serverPort = leesaConfig.server.port
    }
  }
}

module.exports = { host: serverHost, port: serverPort }
