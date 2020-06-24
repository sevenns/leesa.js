## Setup SASS (SCSS) preprocessor

> To use sass (scss) preprocessor, you must install packages necessary for its working:

``` bash
yarn add node-sass sass-loader --dev
```

After installation use `.sass` or `.scss` extension for files in **styles** folder.

## Setup eslint

> To use eslint, you must install packages necessary for its working.

``` bash
yarn add eslint eslint-loader --dev
```

By default, **leesa.js** uses the [airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) settings:
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
However you can configure eslint as usual to your needs by creating `.eslintrc` file in root of your project.

## Configure autoprefixer

> To configure [autoprefixer](https://www.npmjs.com/package/autoprefixer) create `.browserslistrc` in the root of your project and list the browser support rules you need.

By default, **leesa.js** uses next rules:
``` plain
> 10%
last 4 versions
not ie <= 9
```

## Configure Babel

> To configure [babel](https://babeljs.io) create `.babelrc` in the root of your project. Then the setup goes as required by your babel preset.

By default, **leesa.js** uses the [babel-preset-backpack](https://www.npmjs.com/package/babel-preset-backpack) settings.
