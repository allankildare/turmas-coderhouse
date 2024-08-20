const fs = require('fs')

// escreve o arquivo (substitui o conteúdo se já existir)
fs.writeFileSync('saudacao.txt', 'Olá turma! Tudo bem com vocês?')

// retorna um boolean verificando se o arquivo existe
const arquivoExiste = fs.existsSync('./saudacao.txt')

if (arquivoExiste) {
    let conteudo = fs.readFileSync('./saudacao.txt', 'utf-8')
    console.log('Aqui está o conteúdo:\n', conteudo)

    // adiciona conteudo ao arquivo existente
    fs.appendFileSync('./saudacao.txt', '\nEscrevendo mais conteúdo...')

    // lê o arquivo
    conteudo = fs.readFileSync('./saudacao.txt', 'utf-8')
    console.log('Aqui está o novo conteúdo:\n', conteudo)

    // apaga o arquivo (e seu conteudo consequentemente)
    fs.unlinkSync('./saudacao.txt')
}