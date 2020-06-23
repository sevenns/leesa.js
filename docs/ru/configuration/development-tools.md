## Использование SASS (SCSS) препроцессор

> Для использования sass (scss) препроцессора установите необходимые для его работы пакеты:

``` bash
yarn add node-sass sass-loader --dev
```

После установки в папке **styles** используйте `.sass` или `.scss` расширение у файлов.

## Использование eslint

> Для использования eslint установите необходимые для его работы пакеты:

``` bash
yarn add eslint eslint-loader --dev
```

По-умолчанию **leesa.js** использует настройки [airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base):
```json
{
  "parser": "babel-eslint",
  "extends": "airbnb-base",
  "env": {
    "browser": true
  },
  "rules": {
    "max-len": [1, 80, 2, {
      "ignoreComments": true
    }],
    "semi": 0,
    "linebreak-style": 0,
    "space-before-function-paren": 0,
    "no-console": 0,
    "no-param-reassign": 0,
    "comma-dangle": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0,
    "class-methods-use-this": 0,
    "no-use-before-define": 0,
    "no-underscore-dangle": 0
  }
}
```
Однако вы можете настроить eslint как обычно под ваши нужды, создав файл `.eslintrc` в корне проекта.

## Настройка autoprefixer

> Для настройки [autoprefixer](https://www.npmjs.com/package/autoprefixer) в корне проекта создайте файл `.browserslistrc` и перечислите необходимые вам правила поддержки браузеров.

По-умолчанию **leesa.js** использует следующие настройки:
``` plain
> 10%
last 4 versions
not ie <= 9
```

## Настройка Babel

> Для настройки [babel](https://babeljs.io) в корне проекта создайте файл `.babelrc`. Затем настройка проходит как того требует подключаемый вами пресет.

По-умолчанию **leesa.js** использует настройки [babel-preset-backpack](https://www.npmjs.com/package/babel-preset-backpack).
