import express from 'express'

const router = express.Router()

const users = []

router.post('/', (request, response) => {
    const { user } = request.body

    if (users.find((item) => item.email === user.email)) {
        return response.status(400).send({ status: 'error', message: 'Usuário já registrado.' })
    }

    users.push(user)
    return response.status(201).send({ status: 'success', message: 'Usuário criado com sucesso!' })
})

export default router