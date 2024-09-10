import express from 'express'
import handlebars from 'express-handlebars'
import path from 'path'
import { fileURLToPath } from 'url'
import { Server } from 'socket.io' // import do Socket.io

// routes
import viewsRouter from './routes/view.js'
import usersRouter from './routes/user.js'

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
app.use('/api/user', usersRouter)

app.use(express.static(publicPath))

// inicializar o servidor
const httpServer = app.listen(PORT, () => {
    console.log(`Servidor rodando em:\nhttp://localhost:${PORT}`)
})

// Criação de um socket server
const socketServer = new Server(httpServer)

socketServer.on('connection', (socket) => {
    console.log('Novo cliente conectado')
    const arrMessages = []
    socket.on('message', (data) => {
        console.log(data)
        arrMessages.push(data)
        socket.emit('event_for_individual_socket', arrMessages)
    })

    socket.emit('event_for_individual_socket', 'Esta mensagem só deve ser recebida pelo socket do cliente')

    socket.broadcast.emit('event_for_everyone_but_the_current_socket', 'Este evento será visto por todos os sockets conectados, EXCETO o socket atual de onde a mensagem foi enviada')

    socket.emit('event_for_all', 'Enviada para todos')
})