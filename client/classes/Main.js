export default class Main {
  loaded ({ w, h, scroll }) {
    console.log(`
      ~SCROLLED~
      Width: ${w}
      Height: ${h}
      Scroll: ${scroll}
    `)
  }

  scrolled ({ w, h, scroll }) {
    console.log(`
      ~SCROLLED~
      Width: ${w}
      Height: ${h}
      Scroll: ${scroll}
    `)
  }

  resized ({ w, h, scroll }) {
    console.log(`
      ~RESIZED~
      Width: ${w}
      Height: ${h}
      Scroll: ${scroll}
    `)
  }

  loading ({ w, h, scroll }) {
    console.log(`
      ~BEFORELOADED~
      Width: ${w}
      Height: ${h}
      Scroll: ${scroll}
    `)
  }
}
