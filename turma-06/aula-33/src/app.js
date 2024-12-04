import express from 'express'

const app = express()
console.log('teste')

app.listen(8080, ()=> {
  console.log('Servidor rodando\nAcesse em http://localhost:8080/')  
}) 