import express from 'express'
import mongoose from 'mongoose'
import UserRouter from './routes/user.js'
const PORT = 8080
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose
    .connect('mongodb+srv://allankildaredevtest:3PHTIU3XV9FAjWkO@clustercoderhouse.cpnlj.mongodb.net/?retryWrites=true&w=majority&appName=clusterCoderhouse')
    .catch((error) => {
        console.error('Conexão mal sucedida\n', error)
    })

app.use('/api/users', UserRouter)

const httpServer = app.listen(PORT, () => {
    console.log(`Conectado em http://localhost:${PORT}`)
    console.log(process.env.MONGO_DB_USER_PASSWORD)
})