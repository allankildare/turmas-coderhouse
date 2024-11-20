import { Router } from 'express'
import {
  getOrders,
  getOrderById,
  postOrder,
  resolveOrder,
} from './../controllers/orders.js'

const router = Router()

router.get('/', getOrders)
router.get('/:id', getOrderById)

router.post('/', postOrder)
router.put('/:id', resolveOrder)

export default router
