import { Router } from 'express'
import { getUsers, getUserById, postUser } from './../controllers/user.js'

const router = Router()

// /api/users
router.get('/', getUsers)
router.get('/:id', getUserById)
router.post('/', postUser)

export default router