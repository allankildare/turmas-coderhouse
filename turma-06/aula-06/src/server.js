const http = require('http')

const server = http.createServer((request, response) => {
    response.end('Ola mundo!')
})

server.listen(8080, () => {
    console.log('Servidor rodando na porta 8080')
})