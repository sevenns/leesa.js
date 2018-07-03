module.exports = {
  dirs: {
    src: 'client',
    build: 'app',
    views: 'client/views'
  },

  server: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8080
  },

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
