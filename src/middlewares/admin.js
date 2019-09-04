module.exports = (req, res, next) => {
  console.log('Check if is admin')
  if (true) {
    next()
  } else {
    res.json('Ops, you is not an authorized admin')
  }
}