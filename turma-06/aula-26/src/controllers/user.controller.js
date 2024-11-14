import { getUserByEmail } from './../services/UserService.js'
export async function getUser(req, res) {
    const { email } = req.query

    console.log(req.query)
    if (!email) {
        return res.status(400).send({ status: 'error', message: 'E-mail é um campo obrigatório' })
    }

    try {
        const user = await getUserByEmail(email)
    
        if (!user) {
            return res.status(404).send({ status: 'error', message: 'Usuário não encontrado' })
        }
    
        return res.status(200).send({ status: 'success', data: user })
    } catch (error) {
        console.error(error)
        res.status(500).send({ status: 'error', message: 'Usuário não encontrado' })
    }
}
