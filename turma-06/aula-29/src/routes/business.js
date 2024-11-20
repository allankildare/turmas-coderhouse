import { Router } from 'express'
import { addProduct, getBusiness, getBusinessById, postBusiness } from '../controllers/business.js'

const router = Router()

// /api/business
router.get('/', getBusiness)
router.get('/:id', getBusinessById)
router.post('/', postBusiness)
router.post('/:id/product', addProduct) // product enviado via req.body

export default router