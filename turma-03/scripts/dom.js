const valorInicial = document.getElementById('valorInicial')
const valorFinal = document.getElementById('valorFinal')
const numeroSorteado = document.getElementById('numeroSorteado')
const btnSortearNumero = document.getElementById('sortearNumero')

// criar a funcao sortearNumero X
// a funcao recebe valor inicial e o valor final X
// por padrao vao ser os valores dos inputs
// a funcao retorna um valor aleatorio no intervalo definido
// o retorno da funcao vai ser passado para o elemento de numero sorteado

function sortearNumero(valorInicial, valorFinal) {
    return Math.round(Math.random() * valorFinal + valorInicial)
}

console.log( typeof valorFinal.value )

btnSortearNumero.addEventListener('click', () => {
    const numSorteado = sortearNumero(parseInt(valorInicial.value), parseInt(valorFinal.value))
    // numeroSorteado.innerText = numSorteado
    numeroSorteado.textContent = numSorteado + '\nOlá mundo!'
})

const novaDiv = document.createElement('div')
novaDiv.innerText = 'Div criada com JS'
document.body.appendChild(novaDiv)

document.getElementById('removerDiv').addEventListener('click', () => {
    document.getElementById('remocao').remove()
})
