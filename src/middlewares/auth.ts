export default (req, res, next) => {
  console.log('Check if is autenticated')
  if (true) {
    next()
  } else {
    res.json('Ops, you is not autenticated')
  }
}