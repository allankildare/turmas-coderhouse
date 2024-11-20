import express from 'express'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import { config } from 'dotenv'

import UsersRouter from './routes/user.js'
import BusinessRouter from './routes/user.js'
import OrdersRouter from './routes/user.js'

config()

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// rotas
app.use('/api/business', BusinessRouter)
app.use('/api/orders', OrdersRouter)
app.use('/api/users', UsersRouter)

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

// inicializando o servidor
app.listen(PORT, () => {
  console.log(
    `Servidor inicializado com sucesso!\nAcesse em http://localhost:${PORT}`
  )
})
