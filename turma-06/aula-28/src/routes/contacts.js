import { Router as ExpressRouter } from 'express'
import Contacts from '../dao/contacts.js'
import ContactsDTO from '../dto/contacts.js'

const router = ExpressRouter()
const contactsService = new Contacts()

// /api/contacts/all
router.get('/all', async (_, response) => {
  try {
    const result = await contactsService.getAll()

    return response.status(200).send({ status: 'success', data: result })
  } catch (error) {
    return response
      .status(500)
      .send({ status: 'error', message: 'Erro interno' })
  }
})

router.post('/', async (req, res) => {
  try {
    const { name, lastName, phone, email } = req.body

    if (!name || !lastName || !phone) {
      return res
        .status(400)
        .send({ status: 'error', message: 'Todos os campos são obrigatórios' })
    }

    let contact = new ContactsDTO({ name, lastName, phone, email })

    const result = contactsService.postContact(contact)

    return res.status(201).send({
      status: 'success',
      message: 'Contato criado com sucesso',
      data: result,
    })
  } catch (error) {
    return res.send({ status: 'error', message: 'Erro interno' })
  }
})

export default router
