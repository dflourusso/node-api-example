export default (req, res, next) => {
  console.log('Check if is a driver')
  if (true) {
    next()
  } else {
    res.json('Ops, you is not an authorized driver')
  }
}