import { Router } from 'express'
import jwt from 'jsonwebtoken'
import { userModel } from './../../models/UserModel.js'

const router = Router()

router.post('/login', async (req, res) => {
    const { email, password } = req.body

    const user = await userModel.findOne({ email })
    
    if (!user) {
        return res.status(401).send({ status: 'error', message: 'Usuário não autorizado' })
    }

    let token = jwt.sign({ email, password }, process.env.JWT_SECRET, {
        expiresIn: '24h'
    })

    return res.cookie('userToken', token, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
    }).send({ status: 'success', message: 'Logado com sucesso' })
})

export default router