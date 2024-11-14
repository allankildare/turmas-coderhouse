import express from 'express'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import UserRouter from './routes/user.route.js'
import { config } from 'dotenv'

config()

const PORT = 8080
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// rotas
app.use('/api/user', UserRouter)

// conexão com o MongoDB
mongoose
  .connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Conectado com sucesso ao MongoDB')
  })
  .catch((error) => {
    console.error('Erro ao conectar ao MongoDB\n', error)
  })

app.listen(PORT, () => {
  console.log(
    `Servidor inicializado com sucesso!\nAcesse em http://localhost:${PORT}`
  )
})
