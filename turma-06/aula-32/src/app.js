import express from 'express'
import errorMiddleware from './middlewares/errors/index.js'
import stringRouter from './routes/string.js'
import usersRouter from './routes/users.js'

import { config } from 'dotenv'

config()

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(errorMiddleware())

app.use('/string', stringRouter)
app.use('/api/users', usersRouter)

app.get('/string-grande', (req, res) => {
  let stringGrande = 'Olá Coders, sou uma string grande'

  for (let i = 1; i < 100000; i++) {
    stringGrande += '\nOlá Coders, sou uma string grande'
  }

  res.send(stringGrande)
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/`)
})