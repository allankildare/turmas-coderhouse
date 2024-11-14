import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()

app.listen(8080, () => {
    console.log('Rodando em http://localhost:8080/')
})