import { Router as ExpressRouter } from 'express'
import Contacts from '../dao/contacts.js'

const router = ExpressRouter()
const contactsService = new Contacts()

// /api/contacts/all
router.get('/all', async (_, response) => {
  try {
    const result = await contactsService.getAll()

    console.log('resposta foi:\n', result)

    return response.status(200).send({ status: 'success', data: result })
  } catch (error) {
    return response.status(500).send({ status: 'error', message: 'Erro interno' })
  }
})

export default router
