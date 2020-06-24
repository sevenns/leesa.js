Вы можете настроить **leesa.js** как вам удобно с помощью файла `leesa.config.js` в корне проекта. По-умолчанию используются следующие настройки:
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

> Подробнее о каждой настройке будет рассказано в седующих секциях.
