import express from 'express'
import handlebars from 'express-handlebars'
import path from 'path'
import { fileURLToPath } from 'url'

// routes
import viewsRouter from './routes/view.js'

const PORT = 8080

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const viewsPath = path.join(__dirname, 'views')
const publicPath = path.join(__dirname, 'public')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', viewsPath)

// routes
app.use('/', viewsRouter)

app.use(express.static(publicPath))

// inicializar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em:\nhttp://localhost:${PORT}`)
})
