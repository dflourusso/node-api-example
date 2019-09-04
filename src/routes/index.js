const router = require('express').Router()

const authMiddleware = require('../middlewares/auth')
const adminMiddleware = require('../middlewares/admin')
const driverMiddleware = require('../middlewares/driver')

const auth = require('./auth')
const admin = require('./admin')
const drivers = require('./drivers')
const passengers = require('./passengers')

router.use('/auth', auth)
router.use('/admin', authMiddleware, adminMiddleware, admin)
router.use('/drivers', authMiddleware, driverMiddleware, drivers)
router.use('/passengers', authMiddleware, passengers)
router.get('/', (req, res) => {
  const { name, version } = require('../../package.json')
  res.status(200).json({
    name,
    version,
    versions: process.versions
  })
})

module.exports = router