const { existsSync } = require('fs')
const { resolve } = require('path')

const leesaConfigPath = resolve('leesa.config.js')
let postcssConfig = {
  plugins: {
    autoprefixer: {
      browsers: [
        '> 10%',
        'last 4 versions',
        'not ie <= 9'
      ]
    }
  }
}

if (existsSync(leesaConfigPath)) {
  /* eslint-disable-next-line */
  let leesaConfig = require(leesaConfigPath)

  if (leesaConfig && leesaConfig.postcss) {
    postcssConfig = leesaConfig.postcss
  }
}

module.exports = postcssConfig
