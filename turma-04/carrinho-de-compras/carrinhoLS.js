// elementos
const produtoID = document.getElementById('produtoID')
const produtoNome = document.getElementById('produtoNome')
const produtoPreco = document.getElementById('produtoPreco')
const produtoQuantidade = document.getElementById('produtoQuantidade')
const btnAdicionarProd = document.getElementById('btnAdicionarProd')
const btnLimpaProd = document.getElementById('btnLimpaProd')

// produtos
let produtosLS = JSON.parse(localStorage.getItem('produtos'))
let produtos = []

if (Array.isArray(produtosLS) && produtosLS.length > 0) {
    produtos.push(...produtosLS)
    mostraProdutos()
}

function mostraProdutos(mostraTodos = true) {
    if (mostraTodos) {
        produtos.map((item) => {
            const produtoDiv = document.createElement('div')
            produtoDiv.style.marginTop = '12px'
            produtoDiv.style.marginBottom = '12px'
    
            const nomeDiv = document.createElement('div')
            nomeDiv.textContent = `${item.id}. ${item.nome}`
    
            const precoDiv = document.createElement('div')
            precoDiv.innerText = item.preco
    
            const quantidadeDiv = document.createElement('div')
            quantidadeDiv.innerText = `Quantidade: ${item.quantidade}`
    
            produtoDiv.appendChild(nomeDiv)
            produtoDiv.appendChild(precoDiv)
            produtoDiv.appendChild(quantidadeDiv)
            
            document.getElementById('listaProdutos').appendChild(produtoDiv)
        })
    } else {
        //                0       1       2        3
        // produtos = ['banana', 'maçã', 'mamão', 'pêra']
        // produtos[produtos.length - 1]
        // produtos[4 - 1]
        // produtos[3]
        const ultimoProduto = produtos[produtos.length - 1]

        const produtoDiv = document.createElement('div')
        produtoDiv.style.marginTop = '12px'
        produtoDiv.style.marginBottom = '12px'

        const nomeDiv = document.createElement('div')
        nomeDiv.textContent = `${ultimoProduto.id}. ${ultimoProduto.nome}`

        const precoDiv = document.createElement('div')
        precoDiv.innerText = `Preço: R$ ${ultimoProduto.preco}`

        const quantidadeDiv = document.createElement('div')
        quantidadeDiv.innerText = `Quantidade: ${ultimoProduto.quantidade}`

        produtoDiv.appendChild(nomeDiv)
        produtoDiv.appendChild(precoDiv)
        produtoDiv.appendChild(quantidadeDiv)
        
        document.getElementById('listaProdutos').appendChild(produtoDiv)
    }
    
}

btnAdicionarProd.addEventListener('click', (event) => {
    event.preventDefault()
    
    produtos.push({
        id: produtoID.value,
        nome: produtoNome.value,
        preco: produtoPreco.value,
        quantidade: produtoQuantidade.value
    })

    localStorage.setItem('produtos', JSON.stringify(produtos))
    mostraProdutos(false)
})

//função para limpar produtos de local storage
function limpaLS() {
    localStorage.removeItem('produtos') // remove de LS
    produtos = [] // esvazia array de produtos
    document.getElementById('listaProdutos').innerHTML = '' // remove os filhos do elemento de lista de produtos
}

btnLimpaProd.addEventListener('click', limpaLS)
