let arrNumeros = [2, 85, -4, -74, 1024, 321]
let maiorNumero = Math.max(...arrNumeros)
//                         2, 85, -4, ....
// console.log(maiorNumero)

let numerosAdicionais = [3, 7, 85, -32]
//              3, 7, 85, -32
arrNumeros.push(...numerosAdicionais)

// for (let i = 0; i < numerosAdicionais.length; i++) {
//   arrNumeros.push(numerosAdicionais[i])
// }
// console.log(arrNumeros)

function soma(num1, num2, ...numeros) {
  const somaRestantes = numeros.length > 0 ? numeros.reduce((acumulador, itemAtual) => {
    console.log(acumulador)
    return acumulador + itemAtual
  }) : 0

  return num1 + num2 + somaRestantes
}

console.log(soma(1, 5, 8, 65, 87, 54))

const usuario = {
  nome: 'João',
  sobrenome: 'Silva',
  idade: 43,
  endereco: {
    logradouro: 'Avenida Bonita',
    numero: 455,
    cep: '20000-111',
    cidade: 'Belém',
    estado: 'PA'
  }
}

const { endereco, endereco: { logradouro }, sobrenome, ...resto } = usuario
const [primeiroValor, segundoValor,, quartoValor] = arrNumeros

console.log(sobrenome)
console.log(endereco);
console.log(logradouro);
console.log(resto);
console.log(primeiroValor, segundoValor, quartoValor);

const segundoUsuario = {
  nome: 'Cristiane',
  sobrenome: 'Gomes',
  idade: 55,
  endereco: {
    logradouro: 'Avenida Verde',
    numero: 134,
    cep: '20000-222',
    cidade: 'Rio de Janeiro',
    estado: 'RJ'
  }
}

const { endereco: enderecoSegundo } = segundoUsuario
console.log(enderecoSegundo)

document.getElementById('btn').addEventListener('click', ({ preventDefault, target, ...rest }) => {
  // preventDefault()
  console.log(rest)
})