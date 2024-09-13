//This is example file for auth route
import express from 'express'

const router = express.Router()

router
    .post('/login', (req, res) => {
        res.send('Login')
    })
    .post('/register', (req, res) => {
        res.send('Register')
    })

export const authRouter = router
