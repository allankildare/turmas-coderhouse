
const soma = (...numeros) => {
  if (numeros.length === 0) return 0
  const ehDiferenteDeNumero = numeros.some((numero) => typeof numero !== 'number')

  if (ehDiferenteDeNumero) return null

  /*
  let resultado = 0
  numeros.forEach((item) => {
    resultado += item // resultado = resultado + item
  })
  */

  const resultadoTeste = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual)

  return resultadoTeste
}

let testesPassados = 0
let totalTestes = 4

console.log('Teste 1. Deve retornar nulo se algum argumento não for número')
let resultTest1 = soma('2', 2)
if (resultTest1 === null) {
  console.log('| PASSOU | Teste 1\n')
  testesPassados++
}
else console.error(`Falha no teste 1, recebeu ${typeof resultTest1}, mas esperava nulo\n`)

console.log('Teste 2. Deve retornar 0 se nenhum argumento for passado')
let resultTest2 = soma()
if (resultTest2 === 0) {
  console.log('| PASSOU | Teste 2\n')
  testesPassados++
}
else console.error(`Falha no teste 2, recebeu ${resultTest2}, mas esperava 0\n`)

console.log('Teste 3. Deve retornar o resultado da soma esperado')
let resultTest3 = soma(4, 5)
if (resultTest3 === 9) {
  console.log('| PASSOU | Teste 3\n')
  testesPassados++
}
else console.error(`Falha no teste 3, recebeu ${resultTest3}, mas esperava ${4 + 5}\n`)

console.log('Teste 4. Deve fazer a soma com o número variável de argumentos numéricos')
let resultTest4 = soma(4, 5, 6)
if (resultTest4 === 15) {
  console.log('| PASSOU | Teste 4\n')
  testesPassados++
}
else console.error(`Falha no teste 4, recebeu ${resultTest4}, mas esperava ${4 + 5 + 6}\n`)

console.log(`\n${testesPassados} testes de ${totalTestes} passados.`)