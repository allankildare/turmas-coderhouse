/*
Uma função de login (com usuários codificados user = coderUser , password = 123)

Se uma senha vazia for passada, a função deve logar no console ("Sem senha fornecida")
Se um usuário vazio for passado, a função deve  logar no console ("Nenhum usuário fornecido")
Se uma senha incorreta for passada, o  logar no console (“Senha Errada”)
Se o usuário errado for passado,  logar no console (“Credenciais incorretas”)
Se o nome de usuário e a senha coincidirem,  logar no console(“conectado”)
*/

const login = (user, password) => {
  if (!user) return 'Nenhum usuário fornecido'
  if (!password) return 'Sem senha fornecida'
  if (user !== USER) return 'Credenciais incorretas'
  if (password !== PASSWORD) return 'Senha Errada'
  return 'conectado'
}

const USER = 'coderUser'
const PASSWORD = '123'

let testesPassados = 0

// Teste 1. Se uma senha vazia for passada, a função deve logar no console ("Sem senha fornecida")
const teste1 = login('coderUser', '')
if (teste1 === 'Sem senha fornecida') {
  console.log('Teste 1 passou')
  testesPassados++
} else {
  console.log(`Teste 1 falhou, retornou ${teste1}`)
}

// Teste 2. Se um usuário vazio for passado, a função deve  logar no console ("Nenhum usuário fornecido")
const teste2 = login('', '123')
if (teste2 === 'Nenhum usuário fornecido') {
  console.log('Teste 2 passou')
  testesPassados++
} else {
  console.log(`Teste 2 falhou, retornou ${teste2}`)
}

// Teste 3. Se uma senha incorreta for passada, o  logar no console (“Senha Errada”)
const teste3 = login('coderUser', '423')
if (teste3 === 'Senha Errada') {
  console.log('Teste 3 passou')
  testesPassados++
} else {
  console.log(`Teste 3 falhou, retornou ${teste3}`)
}

// Teste 4. Se o usuário errado for passado, logar no console (“Credenciais incorretas”)
const teste4 = login('bla', '123')
if (teste4 === 'Credenciais incorretas') {
  console.log('Teste 4 passou')
  testesPassados++
} else {
  console.log(`Teste 4 falhou, retornou ${teste4}`)
}

// Teste 5. Se o nome de usuário e a senha coincidirem,  logar no console(“conectado”)
const teste5 = login('coderUser', '123')
if (teste5 === 'conectado') {
  console.log('Teste 5 passou')
  testesPassados++
} else {
  console.log(`Teste 5 falhou, retornou ${teste5}`)
}

console.log(`\n${testesPassados} de 5 testes passados`)