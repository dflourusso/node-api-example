import * as express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  res.json({ "error": false, "message": "Hello driver!" })
})

export default router