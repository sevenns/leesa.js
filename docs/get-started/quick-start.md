## Project initialization

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

## leesa.js installation
> Follow the guide: [Setup](/get-started/installation?id=Setup)

## Project structure
> Create following minimum required structure

- **classes**
  - Main.js
  ``` javascript
    /* Necessary entry point */
    export default class Main {}
  ```
- **views**
  - index.pug
  ``` pug
    <!-- Index page -->
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

## Launch server in development mode

``` bash
yarn dev

> Webpack: Finished after 1.333 seconds.
> • Server launched at http://localhost:8080/
```

> Go to http://localhost:8080/ to verify
