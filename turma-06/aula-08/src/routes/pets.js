import { Router } from 'express'
// Notação CommonJS
// const { Router } = require('express')

const router = Router()

const pets = []

router.get('/', (req, res) => {
    res.status(200).send({ pets })
})

/**
 * É a mesma coisa que fazer
 * app.post('/api/pets/')
 */
router.post('/', (req, res) => {
    const body = req.body

    if (!body.name || !body.animal) {
        return res.status(400).send({ status: 'error', message: 'Nome e animal são campos obrigatórios' })
    }

    pets.push(body)
    return res.status(201).send({ status: 'success', message: 'Usuário criado com sucesso' })
})

export default router