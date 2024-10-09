import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import session from 'express-session'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const publicPath = path.join(__dirname, 'public')

const PORT = process.env.PORT || 8080
dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser('coderH0use3951@$klP'))
app.use(express.static(publicPath))
app.use(session({
    secret: 'secretCoder',
    resave: true,
    saveUninitialized: true,
}))

const COOKIE_DURATION = 30 * 60 * 1000 // 30 minutos

app.get('/test', (req, res) => {
    const { nome } = req.query

    if (req.session.counter) {
        req.session.counter++
        if (nome) return res.send(`${nome}, você visitou esse site ${req.session.counter} vezes`)
            return res.send(`Você visitou esse site ${req.session.counter} vezes`)
    } else {
        req.session.counter = 1
        if (nome) return res.send(`Bem-vindo(a) ${nome}`)
        return res.send('Bem-vindo(a) visitante')
    }
})

app.get('/session', (req, res) => {
    if (req.session.counter) {
        req.session.counter++
        res.send(`Visitou esse site ${req.session.counter} vezes`)
    } else {
        req.session.counter = 1
        res.send(`Bem-vindo(a)`)
    }
})

app.get('/logout', (req, res) => {
    req.session.destroy((error) => {
        if (!error) res.send('Logout bem sucedido')
        else res.send({ status: 'error', message: 'Erro no logout' })
    })
})

app.post('/setCookie', (request, response) => {
    const { name, email } = request.body;
  const cookieData = { name, email };

  response.cookie('userInfo', cookieData, { maxAge: 10 * 1000 }); // 10 segundos
  response.json({ status: 'success', message: 'Cookie foi criado com sucesso' });
    // response.cookie('Test', 'Cookie de test', { maxAge: COOKIE_DURATION })
    // response.cookie('CoderCookie', 'Este é um exemplo de cookie', { maxAge: COOKIE_DURATION, signed: true }).send('Cookie criado!')
})

app.get('/getCookie', (request, response) => {
    const cookies = request.cookies
    const signedCookies = request.signedCookies
    response.send({ cookies, signedCookies })
})

app.get('/deleteCookie', (_, response) => {
    response.clearCookie('CoderCookie').send('Cookie removed')
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})