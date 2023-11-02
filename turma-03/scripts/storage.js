if (!localStorage.getItem('tipo_usuario')) {
    localStorage.setItem('tipo_usuario', 'admin')
    console.log('rodou inserção do tipo')
}

const dadosBasicos = {
    id: 1,
    nome: 'Allan',
    sobrenome: 'Kildare',
    idioma: 'Português Brasileiro'
}

if (!localStorage.getItem('dados_basicos')) {
    console.log('rodou inserção dos dados')
    localStorage.setItem('dados_basicos', JSON.stringify(dadosBasicos))
}

if (localStorage.getItem('dados_basicos') && !('id' in JSON.parse(localStorage.getItem('dados_basicos')))) {
    localStorage.setItem('dados_basicos', JSON.stringify(dadosBasicos))
}

const chave = document.getElementById('chave')
const btnApagarChave = document.getElementById('apagarChave')
const btnIdade = document.getElementById('btnIdade')
const idade = document.getElementById('idade')

btnApagarChave.addEventListener('click', () => {
    localStorage.removeItem(chave.value)
})

btnIdade.addEventListener('click', () => {
    // consultar dados basicos
    // conversao pra objeto
    const dados = JSON.parse(localStorage.getItem('dados_basicos'))
    // adicionar nova propriedade
    // se existir, modifica
    dados.idade = parseInt(idade.value)

    localStorage.setItem('dados_basicos', JSON.stringify(dados))
})

const objStr = JSON.stringify({ nome: "Allan Kildare", idade: 21 })
console.log(objStr)
console.log(
    JSON.parse(objStr)
)

console.table(JSON.parse(objStr))

const produtos = [{ id: 1,  produto: "Arroz", preco: 125 },
                  {  id: 2,  produto: "Macarrão", preco: 70 },
                  {  id: 3,  produto: "Pão"  , preco: 50},
                  {  id: 4,  produto: "Pudim" , preco: 100}]

sessionStorage.setItem('lista_produtos', JSON.stringify(produtos))

console.log(
    JSON.parse(sessionStorage.getItem('lista_produtos'))
)

console.log(document.getElementById('nome').value);

document.getElementById('nome').addEventListener('input', (event) => {
    // event.preventDefault()
    console.log(event.target.value)
})

const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const resultado = document.getElementById('resultado')

num1.addEventListener('input', (event) => {
    const num = parseFloat(event.target.value)
    resultado.innerText = num + parseFloat(num2.value)
})

num2.addEventListener('input', (event) => {
    const num = parseFloat(event.target.value)
    resultado.innerText = num + parseFloat(num1.value)
})