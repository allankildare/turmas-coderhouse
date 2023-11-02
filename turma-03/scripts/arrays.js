const estudantes = ['Kaue', 'Jullyana']
console.log(estudantes.length) // retorna 2

estudantes.push('Alexandre')
console.log(estudantes)

estudantes.push('Isaac')
console.log(estudantes)

console.log(estudantes.length) // retorna 4

estudantes.unshift('Allan')

console.log(estudantes)

estudantes.pop()
console.log(estudantes)

estudantes.shift()
console.log(estudantes)

const nomes = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanessa']
nomes.splice(2, 1)
console.log(nomes)

const nomesStr = nomes.join(', ')
console.log(nomesStr)

const caes  = ["Pupy", "Ronnie"]
const gatos = ["Mishi", "Garfield", "Zuri"]
const animais = caes.concat(gatos)
console.log(animais)

const nomesSlice = nomes.slice(1, 3)
console.log(nomesSlice)

console.log( nomes.indexOf('Vanessa') )
console.log( nomes.indexOf('Pedro') )
console.log( nomes.indexOf('Rita') )
console.log( nomes.indexOf('retornará -1') )

console.log( nomes.includes('Rita') )
console.log( nomes.includes('Allan') )

console.log(nomes)
nomes.reverse()
console.log(nomes)

const produtos = [
    { id: 1, produto: "Arroz" },
    { id: 2,  produto: "Macarrão" },
    { id: 3,  produto: "Pão" }
]

for (const produto of produtos) {
    console.log(produto.id)
    console.log(produto.produto)
}

class Produto {
    constructor(nome, preco) {
        this.nome = nome.toUpperCase();
        this.preco = parseFloat(preco);
        this.vendido = false;
    }
    somaICMS() {
        this.preco = this.preco * 1.21;
    }
}

//Declaramos um array de produtos para armazenar objetos
const produtosInstanciados = [];
produtosInstanciados.push(new Produto("arroz", "125"));
produtosInstanciados.push(new Produto("macarrão", "70"));
produtosInstanciados.push(new Produto("pão", "50"));

//Iteramos o array com for...of para modificar todos
for (const produto of produtosInstanciados)
    produto.somaICMS()

console.log(produtosInstanciados)


const idades = [10, 18, 9, 77, 37, 2]
const idadesMaiorQue18 = idades.filter((item, index) => item >= 18)
console.log(idadesMaiorQue18)

const produtoFind = produtosInstanciados.find((produto, index) => produto.nome === 'ARROZ')
console.log(produtoFind)

const dobroIdades = idades.map((item, index) => {
    return item * 2
})

console.log(dobroIdades)