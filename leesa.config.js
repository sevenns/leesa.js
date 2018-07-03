module.exports = {
  rootDir: 'client',

  postcss: {
    plugins: {
      autoprefixer: {
        browsers: [
          '> 10%',
          'last 4 versions',
          'not ie <= 9'
        ]
      }
    }
  },

  development (config) {
    return config
  },

  production (config) {
    return config
  }
}
