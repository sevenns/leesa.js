The `classes` directory contains all js code of project. The **leesa.js** uses a class approach, and the `Main.js` serves as the entry point.

`Main.js` has 4 reserved methods:

- **loaded** - Executed when the page is fully loaded (i.e. event *DOMContentLoaded* or `$(document).ready`)
- **resized** - Executed when a browser window resize event occurs
- **scrolled** - Executed when a browser window scroll event occurs, namely the `body`
- **loading** - Executed when a *loaded* event occurs on `window` object

> You can define your own methods inside `Main.js`, and also describe the `constructor`
