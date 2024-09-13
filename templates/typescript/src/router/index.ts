import express from 'express'
import { authRouter } from './auth.route'

const router = express.Router()

//specify routes here
router.use('/api/v1/auth', authRouter)

export default router
