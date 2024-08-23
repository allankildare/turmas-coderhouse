const fs = require('fs')
const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))

// const file = fs.readFileSync('./usuarios.json', 'utf-8')
// const JsonFile = JSON.parse(file)

app.get('/', (req, res) => {
  res.send('Olá mundo!')
})

app.get('/usuarios', async (req, res) => {
  try {
    const consulta = req.query
    const file = await fs.promises.readFile('./src/usuarios.json', 'utf-8')
    const usuarios = JSON.parse(file)

    if (Object.keys(consulta).length > 0) {
      const usuariosFiltrados = usuarios.filter((item) => {
        return item.genero.includes(consulta.genero)
      })
      res.send(usuariosFiltrados)
    }
    res.send(usuarios)
  } catch (error) {
    res.send(error)
  }
})

app.get('/usuarios/:id', async (req, res) => {
  try {
    const userId = Number(req.params.id)
    const file = await fs.promises.readFile('./src/usuarios.json', 'utf-8')
    const usuarios = JSON.parse(file)
    const usuarioEncontrado = usuarios.find((item, indice) => {
      return item.id === userId
    })

    if (!usuarioEncontrado) res.send({ error: 'Usuário não encontrado.' })
    res.send(usuarioEncontrado)
  } catch (error) {
    res.send(error)
  }
})

app.get('/saldar/:nome/:sobrenome', (request, response) => {
  const nome = request.params.nome
  const sobrenome = request.params.sobrenome
  console.log(request.params)
  response.send(`Olá ${nome} ${sobrenome}!`)
})

app.get('/bemvindo', (request, response) => {
  response.send('<div style="color: blue">Bem-vindo(a)!</div>')
})

app.get('/usuario', (request, response) => {
  response.send({
    nome: 'João',
    sobrenome: 'Silva',
    idade: 65,
    email: 'joao@email.com',
  })
})

app.listen(8080, () => {
  console.log('Servidor rodando na porta http://localhost:8080')
})
