import { Router as ExpressRouter } from 'express'

const router = ExpressRouter()

const PETS = []

router.param('pet', (req, res, next, value) => {
    const regEx = /[a-zA-Z]+/
    if (regEx.test(value)) {
        console.log('deu certo')
        next()
    } else {
        console.log('deu errado')
        return req.send('deu errado')
    }
})

router.get('/:pet', (request, response) => {
    console.log(request.params)
    console.log(PETS)
    const searchPet = PETS.find((petObj) => {
        return petObj.name === request.params.pet
    })

    if (!searchPet) {
        return response.status(404).send({ status: 'error', message: 'Pet não encontrado' })
    }

    return response.status(200).send({ status: 'success', data: searchPet })
})

router.post('/', (request, response) => {
  // { name: string, specie: string }
  const { name, specie } = request.body

  if (!name || !specie) {
    return response
      .status(400)
      .send({
        status: 'error',
        message: 'Campos name e specie são obrigatórios.',
      })
  }

  PETS.push({ name, specie })
  return response.status(201).send({ status: 'success', message: `Pet ${name} adicionado ao banco de dados com sucesso!` })
})

export default router
