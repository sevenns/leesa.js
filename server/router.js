const express = require('express')
const paths = require('../config/paths')
const { resolve } = require('path')
const fs = require('fs')

const router = express.Router()

router.use('/*', (req, res, next) => {
  let url = req.originalUrl
  let view = 'index'
  let isPath = true
  let absolute = {
    path: '/',
    file: 'index.pug'
  }

  if (url !== '/') {
    url = url.slice(1, url.length)
    isPath = url.search(/./i) <= 0
    view = url
    absolute = {
      path: resolve(paths.views, view),
      file: resolve(paths.views, `${view}.pug`)
    }
  }

  if (isPath) {
    if (
      fs.existsSync(absolute.path) ||
      fs.existsSync(absolute.file)
    ) {
      res.render(view)
    } else {
      res.status(404)
      res.render('error/404')
    }
  }

  next()
})

module.exports = router
