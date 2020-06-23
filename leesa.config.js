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

  development (config) {
    return config
  },

  production (config) {
    return config
  }
}
