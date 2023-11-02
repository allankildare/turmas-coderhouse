let carrinho = JSON.parse(localStorage.getItem('carrinho')) || []
console.log(carrinho)

const btnAdicionar = document.querySelector('#btnAdicionar')
const itemCarrinho = document.getElementById('item')

const estudantes = [{ nome: 'Kaue', idade: 45 }, { nome: 'Jullyana', idade: 35 }, { nome: 'João', idade: 64 }]
const [kaue, ...resto] = estudantes
console.log(kaue)
console.log(resto)

const novosEstudantes = [
    { nome: 'José', idade: 23 },
    { nome: 'Ana', idade: 63 },
]

estudantes.push(...novosEstudantes)

console.log(estudantes)


btnAdicionar.addEventListener('click', (event) => {
    event.preventDefault()

    localStorage.setItem('carrinho', JSON.stringify(itemCarrinho.value))
})

let usuario1 = {
    nome: 'João',
    idade: 24
}

let usuario2 = {
    ...usuario1
}

console.log(usuario2)

usuario1.nome = 'Ana'

console.log(usuario2)

function somar(...numeros) {
    return numeros.reduce((acumulador, valorAtual) => {
        return acumulador + valorAtual
    })
}

console.log(
    somar(4, 2, 6, 8, 5)
)