import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

import usersRouter from './routes/users.js'
import petsRouter from './routes/pets.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Estáticos
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const fullPath = path.join(__dirname, 'public')
app.use(express.static(fullPath))

// Rotas
app.use('/api/users', usersRouter)
app.use('/api/pets', petsRouter)

const PORT = 8080

app.listen(PORT, () => {
    console.log('dir name: ', fullPath)
    console.log('Rodando na porta\nhttp://localhost:8080')
})