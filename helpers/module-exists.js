const { resolve } = require

module.exports = (name) => {
  try {
    resolve(name)

    return true
  } catch (error) {
    return false
  }
}
