// import { Router } from 'express'
import Router from './../config/router.js'
import { getUser } from './../controllers/user.controller.js'

const router = Router()

router.get('/', getUser)

export default router
