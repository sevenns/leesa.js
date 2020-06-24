
You can configure **leesa.js** as you like using the file `leesa.config.js` in the root of your project. By default, the following settings are used:
``` javascript
module.exports = {
  dirs: {
    src: '.',
    build: 'app',
    views: 'views'
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
```

> More about each setting will be described in the next sections.
