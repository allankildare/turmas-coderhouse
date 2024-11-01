import express from 'express'
import dictionaryRouter from './routes/dictionary.js'
import petRouter from './routes/pet.js'
import CustomRouter from './router/index.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/dictionary', dictionaryRouter)
app.use('/api/pet', petRouter)

const customRouter = new CustomRouter();
app.use('/', customRouter.getRouter())

app.listen(8080, () => {
    console.log('Servidor rodando em http://localhost:8080/')
})