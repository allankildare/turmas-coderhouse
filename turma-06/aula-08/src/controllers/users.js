export function getAllUsers(req, res) {
    res.status(200).send({ users })
}

export function postUser(req, res) {
    const body = req.body

    if (!body.name || !body.email) {
        return res.status(400).send({ status: 'error', message: 'Nome e email são campos obrigatórios' })
    }

    users.push(body)
    return res.status(201).send({ status: 'success', message: 'Usuário criado com sucesso' })
}