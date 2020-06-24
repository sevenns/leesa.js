You can change the [webpack](https://webpack.js.org/concepts/) settings for `development` and `production` modes.

| Property    | Type     | Example | Default                       | Description                                |
|-------------|----------|---------|-------------------------------|--------------------------------------------|
| development | function | -       | `(config, webpack) => config` | Configure `webpack` for `development` mode |
| production  | function | -       | `(config, webpack) => config` | Configure `webpack` for `production` mode  |

> IMPORTANT: functions `development` and `production` always must return `config`.

## Example

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
