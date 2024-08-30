const express = require('express')
const app = express()

// configuração para interpretar JSON
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let usuarios = []

app.post('/usuarios', (request, response) => {
    let usuario = request.body

    if (!usuario.firstName || !usuario.lastName || !usuario.age || !usuario.email) {
        return response.status(400).send({ status: 'error', message: 'Nome, sobrenome, idade e e-mail são exigidos' })
    }

    if (usuarios.find((item) => item.email === usuario.email)) {
        return response.status(403).send({ status: 'error', message: 'Usuário já cadastrado' })
    }

    usuarios.push(usuario)
    console.log(usuarios)
    response.status(200).send({ status: 'success', message: 'Usuário criado' })
})

app.delete('/usuarios/:name', (request, response) => {
    let name = request.params.name
    console.log(usuarios)
    console.log(usuarios.find((item) => item.firstName === name))

    if (usuarios.find((item) => item.firstName === name)) {
        return response.status(201).send({  status: 'success', message: 'Usuário deletado' })
    }

    return response.status(404).send({  status: 'error', message: 'Usuário não encontrado' })
})

app.listen(8080, () => {
    console.log('Rodando na porta\nhttp://localhost:8080')
})