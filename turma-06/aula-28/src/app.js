import express from 'express'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import ContactsRouter from './routes/contacts.js'
import './config/dotenv.js'

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/api/contacts', ContactsRouter)

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
