The `components` directory contains reusable parts of the application that can be used inside [`views`](/ru/structure/views) or inside other components. To use components, **leesa.js** uses the capabilities of **pug**, namely `mixin` and `include`.

Component usage example:

``` pug
include /components/Component.pug

//- ...
```
