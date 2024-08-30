// Notação CommonJS
// const { Router } = require('express')

// Notação CommonJS
import { Router } from 'express'
import { getAllUsers, postUser } from '../controllers/users.js'
import { validateEmail } from '../middlewares/utils.js'

const router = Router()

router.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});

router.get('/', getAllUsers)
router.post('/', validateEmail, postUser)

export default router
