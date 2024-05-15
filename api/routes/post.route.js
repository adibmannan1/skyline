import express from 'express'
import { login, logout, register } from '../controllers/auth.controller.js'
const router= express.Router()

router.get('/', (req, res) => {
    console.log('it works')
})

export default router