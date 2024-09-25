import { Router as ExpressRouter } from 'express'
import { userModel } from '../models/user.model.js'
// import { userModel } from "../models/user.model.js";

const router = ExpressRouter()

router.get('/', async (_, response) => {
  try {
    let users = await userModel.find()
    response.status(200).send({ status: 'success', data: users })
  } catch (error) {
    console.error('Erro ao requisitar os usuários')
  }
})

router.post('/', async (request, response) => {
  const { first_name, last_name, email } = request.body
  if (!first_name || !last_name || !email) {
    return response.status(400).send({
      status: 'error',
      message: 'Nome, sobrenome e email são campos obrigatórios',
    })
  }
  // console.log('deu certo!')
  let result = await userModel.create({
    first_name,
    last_name,
    email,
  })
  return response.status(200).send({
    status: 'success',
    message: 'Usuário adicionado com sucesso!',
    data: result,
  })
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { user } = req.body

  if (!user.first_name || !user.last_name || !user.email) {
    return res.status(400).send({
      status: 'error',
      message: 'Nome, sobrenome e email são campos obrigatórios',
    })
  }

  let result = await userModel.updateOne({ _id: id }, { ...user })
  return res
    .status(201)
    .send({
      status: 'success',
      message: 'Usuário atualizado com sucesso!',
      data: result,
    })
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params

    let result = await userModel.deleteOne({ _id: id });
    return res
    .status(200)
    .send({
      status: 'success',
      message: 'Usuário deletado com sucesso!',
      data: result,
    })
})

export default router
