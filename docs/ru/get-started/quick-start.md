## Иницализация проекта

``` bash
yarn init

> question name (leesa-quick-start): 
> question version (1.0.0): 
> question description: leesa.js quick start
> question entry point (index.js): 
> question repository url: 
> question author: author-name
> question license (MIT): 
> question private: true
> success Saved package.json
> ✨ Done in 2.92s.
```

## Установка leesa
> Следуйте инструкции: [Установка](/ru/get-started/installation?id=Установка-и-настройка)

## Структура проекта
> Воссоздайте следующую минимальную необходимую сруктуру

- **classes**
  - Main.js
  ``` javascript
    /* Необходимая точка входа */
    export default class Main {}
  ```
- **views**
  - index.pug
  ``` pug
    <!-- Index страница -->
    <!DOCTYPE html>
    html(lang="en")
      head
        meta(charset="UTF-8")
        meta(name="viewport", content="width=device-width, initial-scale=1.0")
        title leesa.js - Quick start
      body
        span Index page
  ```
- **styles**
  - index.css

## Запуск

``` bash
yarn dev

> Webpack: Finished after 1.333 seconds.
> • Server launched at http://localhost:8080/
```

> Перейдите по адресу http://localhost:8080/ для проверки
