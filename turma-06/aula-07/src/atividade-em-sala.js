const express = require('express')
const app = express()
app.use(express.json())

let frase = "Frase inicial"

const getPalavras = () => frase.split(' ')

app.get('/api/frase', (req, res) => {
  res.json({ frase })
})

app.get('/api/palavras/:pos', (req, res) => {
  const pos = parseInt(req.params.pos)
  const palavras = getPalavras()

  if (pos > 0 && pos <= palavras.length) {
    res.json({ busca: palavras[pos - 1] })
  } else {
    res.status(404).json({ erro: "Posição inválida" })
  }
})

app.post('/api/palavras', (req, res) => {
  const novaPalavra = req.body.palavra
  frase += ` ${novaPalavra}`
  const pos = getPalavras().length
  res.json({ adicionado: novaPalavra, pos })
})

app.put('/api/palavras/:pos', (req, res) => {
  const pos = parseInt(req.params.pos)
  const novaPalavra = req.body.palavra
  const palavras = getPalavras()

  if (pos > 0 && pos <= palavras.length) {
    const palavraAnterior = palavras[pos - 1]
    palavras[pos - 1] = novaPalavra
    frase = palavras.join(' ')
    res.json({ atualizado: novaPalavra, anterior: palavraAnterior })
  } else {
    res.status(404).json({ erro: "Posição inválida" })
  }
})

app.delete('/api/palavras/:pos', (req, res) => {
  const pos = parseInt(req.params.pos)
  const palavras = getPalavras()

  if (pos > 0 && pos <= palavras.length) {
    const palavraRemovida = palavras.splice(pos - 1, 1)
    frase = palavras.join(' ')
    res.json({ removido: palavraRemovida[0] })
  } else {
    res.status(404).json({ erro: "Posição inválida" })
  }
})

const PORT = 8080
app.listen(PORT, () => {
    console.log('Rodando na porta\nhttp://localhost:8080')
})
