// console.log('Início')

// setTimeout(() => {
//     console.log('Rodar após 2s')
// }, 0)

// console.log('Fim da execução')

// const contadorSegundos = document.querySelector('#seg')
// let valor = parseInt(contadorSegundos.textContent)

// console.log('Função síncrona')
// setInterval(() => {
//     contadorSegundos.textContent = `${valor++}s`
//     console.log('Função assíncrona')
// }, 1000)

// const alunos = ['Kaue', 'Jullyana']

// for (let letra of 'olá') {
//     console.log(letra)
// }

// for (let letra of 'olá') {
//     setTimeout(() => {
//         console.log(letra)
//     }, 1000)
// }

function multiplicar(x, y) {
    return new Promise((resolve, reject) => {
        if (typeof x === 'number' && typeof y === 'number') {
            resolve(x * y)
        } else {
            reject('Ambos os valores os valores tem que ser números')
        }
    })
}

let resultado = 0

multiplicar(4, 2)
    .then((resposta) => {
        console.log(resposta)
        resultado = resposta
        console.log('resultado: ', resultado)

    })
    .catch((error) => console.log(error))
    .finally(() => {
        console.log('Essa promessa encerrou')
        console.log('-------------------');
    })


multiplicar(4, '87')
    .then((resposta) => {
        console.log(resposta)
        resultado = resposta
        console.log('resultado: ', resultado)
    })
    .catch((error) => console.error(error))
    .finally(() => console.log('Essa promessa encerrou'))

const elementos = [
    { el: 'h1', content: 'Olá mundo!' },
    { el: 'h2', content: 'Aprenda a trabalhar com assincronia no JavaScript' },
    { el: 'p', content: 'Lorem ipsum dolor sit amet...' },
]

function solicitarElementos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(elementos)
        }, 4000)
    })
}

solicitarElementos()
    .then((response) => {
        for (let elemento of response) {
            let el = document.createElement(elemento.el)
            el.innerHTML = elemento.content
            document.body.appendChild(el)
        }
        return true
    })
    .then((elementosCriados) => {
        if (elementosCriados) console.log('Os elementos foram criados')
    })
    .finally(() => console.log('Finalização da promessa'))


const usuarios = ['Allan', 'Isaac', 'Kauê']

function solicitarUsuarios() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(usuarios)
        }, 1500)
    })
}

solicitarUsuarios()
    .then((usuarios) => {
        for (let usuario of usuarios) {
            console.log(usuario)
        }
    })