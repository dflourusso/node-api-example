import { Router } from 'express'
const router = Router()

import authMiddleware from '../middlewares/auth'
import adminMiddleware from '../middlewares/admin'
import driverMiddleware from '../middlewares/driver'

import auth from './auth'
import admin from './admin'
import drivers from './drivers'
import passengers from './passengers'

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

export default router
