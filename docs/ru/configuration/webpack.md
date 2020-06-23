Вы можете изменить настройки [webpack](https://webpack.js.org/concepts/) для `development` и `production` режимов.

| Параметр    | Тип      | Пример | По умолчанию                   | Описание                                    |
|-------------|----------|--------|-------------------------------|----------------------------------------------|
| development | function | -      | `(config, webpack) => config` | Настройка `webpack` для `development` режима |
| production  | function | -      | `(config, webpack) => config` | Настройка `webpack` для `production` режима  |

> ВАЖНО: функции `development` и `production` всегда должны возвращать `config`.

## Пример

``` javascript
{
  development (config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@some': '/path/to/some'
    }

    return config
  }
}
```
