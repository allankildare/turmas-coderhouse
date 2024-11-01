import express from 'express'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import passport from 'passport'
import initializePassport from './config/passport.js'
import authMeRouter from './routes/public/authMe.js'

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
initializePassport()
app.use(passport.initialize())

// Rotas
app.use('/auth-me', authMeRouter)

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

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(
    `Servidor inicializado com sucesso!\nAcesse em http://localhost:${PORT}`
  )
})
