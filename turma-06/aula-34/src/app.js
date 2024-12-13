import express from 'express'
import { addLogger } from './middlewares/logger.js'
import './config/dotenv.js'

const app = express()

// middlewares
app.use(addLogger)

app.get('/', (req, res) => {
  req.logger.warn('Isto é um alerta!')
  req.logger.verbose('Isto é um verbose!')
  res.send({ message: 'Teste de logger' })
})

app.get('/operacao-simples', (req, res) => {
  let soma = 0

  for (let i = 0; i < 10000; i++) {
    soma += i
  }

  res.send({ soma })
})

app.get('/operacao-complexa', (req, res) => {
  let soma = 0

  for (let i = 0; i < 5e8; i++) {
    soma += i
  }

  res.send({ soma })
})

app.listen(8080, () => {
  console.log('Servidor rodando...\nAcesse http://localhost:8080/')
  console.log('Ambiente: ', process.env.NODE_ENV)
})