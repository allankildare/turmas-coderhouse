console.log('Início do código')
let contador = 0

const intervalo = setInterval(() => {
    contador++
    console.log(contador)
    // se contador chegar a 10, parar o interval
    if (contador >= 10) {
        clearInterval(intervalo)
    }
}, 1000)

console.log('Fim do código')