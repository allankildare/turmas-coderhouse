// setTimeout(() => {
//     console.log('[1] Processo assíncrono')
// }, 1500)

// setTimeout(() => {
//     console.log('[2] Processo assíncrono')
// }, 2000)

function dobro(numero) {
    return numero * 2
}

function retornaDobro(numero) {
    const numDobro = dobro(numero)
    console.log(`O dobro de ${numero} é ${numDobro}`)
}

retornaDobro(4)


console.log("Início")

// const fim = setTimeout(() => {
//     console.log("Fim")
//     clearTimeout(fim)
// }, 2000)

// let contador = 0
// const intervalo = setInterval(() => {
//     contador++
//     console.log(contador)
//     if (contador >= 10) {
//         clearInterval(intervalo)
//     }
// }, 500)

/*
dobro(4)
retornaDobro(4)
*/

function eventoFuturo(res) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            res ? resolve('Promessa resolvida') : reject('Promessa rejeitada')
        }, 2000)
    })
}

const res = eventoFuturo(true)
    .then((resposta) => {
        console.log(resposta)
        return resposta
    })
    .then((resposta) => {
        console.log('A resposta foi essa: ', resposta)
    })
    .catch(erro => {
        console.error(erro)
    })
    .finally(() => {
        console.log('Acabouuuu!')
    })

console.log(res)

eventoFuturo(false)
    .then((resposta) => {
        console.log(resposta)
    })
    .catch(erro => {
        console.error(erro)
    })
    .finally(() => {
        console.log('Acabouuuu!')
    })
