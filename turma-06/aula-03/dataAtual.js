const fs = require('fs')

const dataAtual = new Date().toLocaleString()

fs.writeFile('./data-atual.txt', dataAtual, (error) => {
    if (error) throw new Error('Erro ao criar arquivo')

        fs.readFile('./data-atual.txt', 'utf-8', (error, resultado) => {
            if (error) throw new Error('Erro ao ler arquivo')
            console.log('Aqui está a data atual:\n', resultado)
        })
})
