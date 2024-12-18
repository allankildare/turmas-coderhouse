import { Router } from 'express'
import Users from './../dao/user.js'
import UserDTO from './../dto/user.js'

const router = Router()
const usersDao = new Users()

router.get('/all', async (_, res) => {
  try {
    const result = await usersDao.getAll()

    return res.status(200).send({ status: 'success', data: result })
  } catch (error) {
    return res.status(500).send({ status: 'error', message: 'Erro interno' })
  }
})

router.post('/', async (req, res) => {
  const { firstName, lastName, email, birthDate, password, phone, bio } =
    req.body

  if (!firstName || !lastName || !email || !birthDate || !password || !phone) {
    return res
      .status(400)
      .send({ status: 'error', message: 'Todos os campos são obrigatórios' })
  }

  let user = new UserDTO({ firstName, lastName, email, birthDate, password, phone, bio })

  const result = await usersDao.postUser(user)

  return res.status(201).send({
    status: 'success',
    message: 'Usuário criado com sucesso',
    data: result,
  })
})

export default router
