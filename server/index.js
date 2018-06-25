const express = require('express')
const middlewares = require('./middlewares')
const paths = require('../config/paths')
const config = require('../config/server')

const app = express()
const { host, port } = config

middlewares(app)

app.locals.basedir = paths.client
app.set('views', paths.views)
app.set('view engine', 'pug')

app.listen(port, host)
