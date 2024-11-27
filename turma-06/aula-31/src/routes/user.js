import { Router } from 'express'
import { generateUser } from './../mocks/generateUser.js'

const router = Router()

router.get('/', (_, response) => {
  try {
    let users = []

    for (let i = 1; i <= 100; i++) {
      users.push(generateUser())
    }

    return response.send({ status: 'success', data: users })
  } catch (error) {
    console.error('Erro na geração randômica de usuários\n', error)

    return response.status(500).send({
      status: 'error',
      message: 'Erro na criação de usuários aleatórios',
    })
  }
})

export default router
