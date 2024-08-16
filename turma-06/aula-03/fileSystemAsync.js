const fs = require('fs')

fs.writeFile('./saudacao-02.txt', 'Olá turma! Tudo bem com vocês?', (error) => {
    if (error) throw new Error('Erro na criação do arquivo')

        fs.readFile('./saudacao-02.txt', 'utf-8', (error, resultado) => {
            if (error) throw new Error('Erro na leitura do arquivo')
            console.log('Aqui está o conteúdo:\n', resultado)

            fs.appendFile('./saudacao-02.txt', '\nEscrevendo mais conteúdo...', (error, resultado) => {
                fs.readFile('./saudacao-02.txt', 'utf-8', (error, resultado) => {
                    if (error) throw new Error('Erro na releitura do arquivo')
                    console.log('Aqui está o novo conteúdo:\n', resultado)
                }) 
            })
        })
})

