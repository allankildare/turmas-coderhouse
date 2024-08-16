const fs = require('fs')
const user = {
    nome: 'Allan',
    sobrenome: 'Kildare',
    idade: 22,
}

async function salvaUsuario() {
    await fs.promises.writeFile('./users.json', JSON.stringify(user))
    const resultado = await fs.promises.readFile('./users.json', 'utf-8')
    const parseResultado = JSON.parse(resultado)
    console.log(resultado)
    console.log(parseResultado)
}

salvaUsuario()