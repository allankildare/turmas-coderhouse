// sintaxe com function
export async function getUsers(req, res) {
    res.send({ status: 'success', data: [] })
}

// sintaxe com arrow function
export const getUserById = async (req, res) => {
    const { id } = req.params
    res.send({ status: 'success', data: { id } })
}

export async function postUser(req, res) {
    res.send({ status: 'success', message: 'Usuário criado com sucesso' })
}