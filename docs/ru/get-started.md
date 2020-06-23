## Требования

 - [nodejs](https://nodejs.org/en/) (LTS версия или выше)
 - npm или [yarn](https://yarnpkg.com/)

## Установка

- **Добавление leesa в проект**

``` bash
yarn add leesa --dev
```

- **Настройка scripts в package.json**

``` json
{
  "scripts": {
    "dev": "leesa",
    "build": "leesa build",
    "start": "leesa start",
    "icons": "leesa icons"
  }
}
```

## Использование

``` bash
# Запуск сервера с hot-reload
yarn dev

# Сборка
yarn build

# Запуск в production режиме
yarn start

# Создание SVG иконок
yarn icons
```