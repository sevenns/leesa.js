Using the `server` setting, you can change the `host` and `port` of the server.

| Property | Type   | Example     | Default                             | Description    |
|----------|--------|-------------|-------------------------------------|----------------|
| host     | string | `'0.0.0.0'` | `process.env.HOST \|\| 'localhost'` | Host of server |
| port     | number | `3003`      | `8080`                              | Port of server |

## Example

``` javascript
{
  server: {
    host: '0.0.0.0',
    port: 3000
  }
}
```

As a result, when you launch the server, you will see:

``` bash
yarn dev

> Webpack: Finished after 1.307 seconds.
> • Server launched at http://0.0.0.0:3000/
```

> If you need to be able to view site from any device via the internal IP address (example, http://192.168.0.150:3000/)
