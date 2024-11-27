import express from 'express'
import usersRouter from './routes/user.js'
import { config } from 'dotenv'

config()

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/users', usersRouter)

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/`)
})