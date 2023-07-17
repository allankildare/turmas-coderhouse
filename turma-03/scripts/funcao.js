function saudacao() {
    // as instruções vai aqui
    console.log('Olá, estudantes!')
}

saudacao()

// function solicitaNome() {
//     let nome = prompt('Qual é o seu nome?')
//     alert('Olá ' + nome + ', seja bem-vindo(a)')
// }

// solicitaNome()

function somar(num1, num2) {
    return num1 + num2
    console.log(num1)
}

const somaDoisNumeros = somar(2, 8) // 10

console.log(somaDoisNumeros) // console.log(10)
// somar(2, 8)
somar(5, 7)
somar(7, 6)

function calculadora(primeiroNumero, segundoNumero, operacao) {
    switch (operacao) {
        case "+":
            return primeiroNumero + segundoNumero;
        case "-":
            return primeiroNumero - segundoNumero;
        case "*":
            return primeiroNumero * segundoNumero;
        case "/":
            return primeiroNumero / segundoNumero;
        default:
            return 0;
    }
}

const somaCalc = calculadora(5, 4, '+')
const subtracaoCalc = calculadora(5, 4, '-')
const multiplicacaoCalc = calculadora(5, 4, '*')
const divisaoCalc = calculadora(20, 4, '/')
const padraoCalc = calculadora()
console.log(somaCalc)
console.log(subtracaoCalc)
console.log(multiplicacaoCalc)
console.log(divisaoCalc)
console.log(padraoCalc)

function imprimeNomes(lista = []) {
    if (lista.length === 0) console.log('Array vazio')
    for (let i = 0; i < lista.length; i++) {
        console.log('O nome da pessoa é ' + lista[i])
    }
}

imprimeNomes([
    'Allan', 'Isaac', 'Thalles', 'Izabela', 'Kauê'
])

imprimeNomes([
    'Vinicius', 'Jullyana'
])

imprimeNomes()

// let resultado = 0

function subtracao(num1, num2) {
    var resultado = num1 - num2
}

subtracao(7, 4)

const arr = ['colher', 56, true, 'spray', 'array', false]

const novoArr = arr.filter((item) => typeof item === 'string')

console.log(novoArr)

const somarAnonimo = function (a, b) {
    console.log(a + b)
    return a + b
}
somarAnonimo(4, 5)
