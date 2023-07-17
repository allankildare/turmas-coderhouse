// meu primeiro codigo javascript
/*
    este é um comentario de multiplas
    linhas
*/
console.log('Olá mundo!')
// camelCase
var nomeESobrenome = "Allan Kildare"
console.log(nomeESobrenome)
let idade = 21.3
idade = 32

const cpf = '111.222.333-44'

let numeroA = 15
let numeroB = 3
const resultadoSoma = numeroA + numeroB
console.log(resultadoSoma)

const resultadoSubtracao = numeroA - numeroB
console.log(resultadoSubtracao)

const resultadoMultiplicacao = numeroA * numeroB
console.log(resultadoMultiplicacao)

const resultadoDivisao = numeroA / numeroB
console.log(resultadoDivisao);

let textoA = "CODER";
let textoB = "HOUSE";
const BRANCO = " ";
// Concatenar textoA e textoB ("CODER" + "HOUSE" = "CODERHOUSE")
let resultadoA = textoA + textoB;
// Concatenar textoB e 1 ("HOUSE" + 1 = "HOUSE1")
let resultadoB = textoB + 1;
// Concatenar textoA, BRANCO e textoB ("CODER" + " " + "HOUSE" = "CODER HOUSE")
let resultadoC = textoA + BRANCO + textoB;

console.log(resultadoA)
console.log(resultadoB)
console.log(resultadoC)

// prompt
// let nome = prompt("Digite seu nome:")
// console.log("O valor lido foi: " + nome)

// alert('Olá mundo!')


let numero = 6 // atribui 5 a variável numero

if (numero == 5) {
    console.log('É igual')
} else {
    console.log('Não é igual');
}

// let nomeDoUsuario = prompt('Digite seu nome:')

// if (nomeDoUsuario == '') {
//     alert('Usuário inválido!')
//     console.error('Você digitou uma string vazia')
// } else {
//     alert('Seja bem-vindo(a) ' + nomeDoUsuario)
// }

let nota = 4.8

if (nota < 5) {
    console.log('Precisa de prova de recuperação');
} else if (nota < 7) {
    console.log('Precisa apenas entregar um trabalho')
} else {
    console.log('Aluno aprovado');
}

let numeroMagico = 5
const eMaiorQueCinco = numeroMagico > 5
const eIgualACinco = (numeroMagico == 5)

if (eMaiorQueCinco) {
    console.log('É maior que 5')
} else if (eIgualACinco) {
    console.log('É igual a 5');
} else {
    console.log('Menor que 5')
}

const classificacaoEtaria = 16
let idadeEspectador = prompt('Digite aqui sua idade:')
let parseIdade = parseInt(idadeEspectador)
console.log(parseIdade)

if (idadeEspectador >= classificacaoEtaria) {
    console.log('Bom filme!')
} else {
    console.warn('Este filme não é recomendado para a sua idade')
}
