Директория `classes` содержит весь js код проекта. В **leesa.js** применяется классовый подход, а в качестве точки входа служит `Main.js`.

`Main.js` имеет 4 ключевых метода:

- **loaded** - Выполняется, когда документ полностью загружен (т.е. событие *DOMContentLoaded* или `$(document).ready`)
- **resized** - Выполняется, когда происходит событие изменения размера окна браузера
- **scrolled** - Выполняется, когда происходит событие прокрутки окна, а именно `body`
- **loading** - выполняется по событию *loaded* у объекта `window`

> Вы можете определять свои методы внутри `Main.js`, а также описать `constructor`
