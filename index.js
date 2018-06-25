import Main from '~client/classes/Main'
import '~client/styles/index'

if (process.env.NODE_ENV === 'production') {
  multipleRequire(require.context('~views', true, /\w\.pug$/))
}

const main = new Main()

document.addEventListener('DOMContentLoaded', () => {
  const data = {
    w: window.innerWidth,
    h: window.innerHeight,
    scroll: window.pageYOffset
  }

  return main.loaded ? main.loaded(data) : null
})

window.addEventListener('scroll', () => {
  const data = {
    w: window.innerWidth,
    h: window.innerHeight,
    scroll: window.pageYOffset
  }

  return main.scrolled ? main.scrolled(data) : null
})

window.addEventListener('resize', () => {
  const data = {
    w: window.innerWidth,
    h: window.innerHeight,
    scroll: window.pageYOffset
  }

  return main.resized ? main.resized(data) : null
})

window.addEventListener('load', () => {
  const data = {
    w: window.innerWidth,
    h: window.innerHeight,
    scroll: window.pageYOffset
  }

  return main.loading ? main.loading(data) : null
})

function multipleRequire (r) { r.keys().forEach(r) }
