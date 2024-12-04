import { Router } from 'express'
import CustomError from './../services/errors/CustomError.js'
import EErrors from '../services/errors/enums.js'
import { generateUserErrorInfo } from '../services/errors/info.js'

const router = Router()

router.post('/', (req, res) => {
  const { first_name, last_name, age, email } = req.body

  if (!first_name || !last_name || !email) {
    CustomError.createError({
      name: 'Erro de criação de usuário',
      cause: generateUserErrorInfo({ first_name, last_name, age, email }),
      message: 'Falha ao criar usuário',
      code: EErrors.INVALID_TYPES_ERROR
    })
  }

  const user = { first_name, last_name, age, email }

  // if 
})

export default router