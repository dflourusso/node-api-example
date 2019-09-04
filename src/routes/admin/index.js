const router = require('express').Router()

router.get('/', (req, res) => {
  res.json({ "error": false, "message": "Hello admin!" })
})

module.exports = router