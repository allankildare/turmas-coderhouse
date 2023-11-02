const nomes = ['Alexandre', 'Izabela', 'Jullyana']

nomes.forEach((nome, indice) => {
    console.log(nome)
})

nomes.forEach((nome) => {
    nome = 'Allan'
    console.log(nome)
})

console.log(nomes)

const cursos = [
    { nome: 'Javascript', preco: 15000 },
    { nome: 'ReactJS', preco: 22000 },
    { nome: 'AngularJS', preco: 22000 },
    { nome: 'Desenvolvimento Web', preco: 16000 },
]

const cursosFind = cursos.find((item) => {
    return item.nome === 'Javascript'
})

const cursosSome = cursos.some((curso) => {
    return curso.nome === 'Javascript'
})

const cursosFilter = cursos.filter((item) => {
    return item.preco > 20000
})

const cursosMap = cursos.map((curso) => {
    return { nome: 'Curso do Allan', preco: curso.preco }
})

console.log('método find:', cursosFind)
console.log('método some: ', cursosSome)
console.log('método filter: ', cursosFilter)
console.log('método map: ', cursosMap)

const pessoasEmSala = ['Allan', 'Isaac', 'Izabela', 'Alexandre', 'Jullyana', 'Kaue']
const pessoasEmSalaJoin = pessoasEmSala.join()
console.log(pessoasEmSalaJoin)

const pessoasEmSalaReduce = pessoasEmSala.reduce((acumulador, pessoa, indice) => {
    if (indice === 0) return acumulador + pessoa
    else return acumulador + ',' + pessoa
}, '')

console.log(pessoasEmSalaReduce)