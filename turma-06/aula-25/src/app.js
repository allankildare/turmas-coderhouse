import express from 'express'
import cookieParser from 'cookie-parser'
import './config/dotenv.js'

console.log(process.env.PORT)

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(
      `Servidor inicializado com sucesso!\nAcesse em http://localhost:${PORT}`
    )
  })