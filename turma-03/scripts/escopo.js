let global = 'escopo global'

function primeiraLetraMaiuscula(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1)
}

function retiraPrimeiraPalavra(texto) {
    const primeiraPalavra = texto.split(' ')[0]

    return primeiraLetraMaiuscula(primeiraPalavra)
}

console.log(
    primeiraLetraMaiuscula('allan')
)

console.log(
    retiraPrimeiraPalavra('allan kildare')
)