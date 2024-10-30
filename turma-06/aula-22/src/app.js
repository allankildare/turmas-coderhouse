import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'
import { config } from 'dotenv'
import initializePassport, { passportCall } from './config/passport.js'
import passport from 'passport'

config()

const PORT = process.env.PORT || 8080

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const publicPath = path.join(__dirname, 'public')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
initializePassport()
app.use(passport.initialize())

app.use(express.static(publicPath))

app.post('/login', (request, response) => {
  const { email, password } = request.body
  let token = jwt.sign({ email, password }, process.env.CODER_SECRET, {
    expiresIn: '24h',
  })

  return response
    .cookie('coderCookieToken', token, {
      maxAge: 60 * 60 * 1000,
    })
    .send({ status: 'success', message: 'Logado com sucesso!' })
})

app.get('/current', passportCall('jwt'), (req, res) => {
  res.send(req.user)
})

app.listen(PORT, () => {
  console.log(`Servidor rodando!\nAcesse http://localhost:${PORT}/`)
})
