const fs = require('fs')
const express = require('express')
const { resolve } = require('path')

const paths = require('../config/paths')

const router = express.Router()

router.use((req, res) => {
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
      fs.existsSync(absolute.path)
      || fs.existsSync(absolute.file)
    ) {
      res.render(view, {}, (error, html) => {
        if (error) {
          console.error(error)
          res.status(500)
          res.render('error/500', { error })
        } else {
          res.send(html)
        }
      })
    } else {
      res.status(404)
      res.render('error/404', { path: req.originalUrl })
    }
  }
})

module.exports = router
