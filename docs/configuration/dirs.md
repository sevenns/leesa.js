Using the `dirs` setting, you can change the location of the source files, the build folder, the folder of the site pages.

> All paths are relative to the project root.

| Property | Type   | Example    | Default      | Description             |
|----------|--------|------------|--------------|-------------------------|
| src      | string | `'client'` | `'.'`        | Directory with source   |
| build    | string | `'dist'`   | `'app'`      | Project build directory |
| views    | string | `'pages'`  | `'views'`    | Directory of site pages |

## Example

> Move sources from root folder.

``` javascript
{
  dirs: {
    src: 'src',
    views: 'src/pages',
    build: 'dist'
  }
}
```