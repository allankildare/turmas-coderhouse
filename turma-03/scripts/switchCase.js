// let nomeInserido = prompt('Olá aluno, qual o seu nome?')
const estudantes = ['Alexandre', 'Jullyana', 'Kaue']
//                    0             1          2

// if (estudantes.indexOf(nomeInserido) !== -1) {
//     alert(`Olá ${nomeInserido}`)
// }

// if (estudantes.includes(nomeInserido)) {
//     alert(`Olá ${nomeInserido}`)
// } else {
//     alert('Não temos esse aluno registrado')
// }
// for (const estudante of estudantes) {
//     if (estudante === nomeInserido) {
//         alert(`Olá ${nomeInserido}`)
//         break
//     }
//     console.log('rodou')
// }

// switch (nomeInserido) {
//     case 'Kaue':
//         alert('Olá Kaue')
//         break
//     case 'jullyana':
//     case 'Jullyana':
//         alert('Olá Jullyana')
//         break
//     default:
//         alert('Nome não está presente na lista')
// }

// let entrada = prompt("Inserir um dado");
// //Repetimos com while até que o usuário insira "ESC"
// while(entrada != "ESC" ){
//     alert(`O usuário inseriu ${entrada}`);
//     //Voltamos a solicitar um dado. Na próxima iteração, verificamos se não é ESC.
//     entrada = prompt("Inserir outro dado");
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// function extraiPropriedade (obj, prop) {
//     if (obj[prop]) return obj[prop]
//     else throw new Error('Esta propriedade não existe')
// }

// const professor = {
//     nome: 'Allan',
//     naturalidade: 'RN',
// }

// console.log(
//     extraiPropriedade(professor, 'nome'),
// )
// console.log(
//     extraiPropriedade(professor, 'idade')
// )

// function Pessoa(nome, idade, rua) {
//     this.nome = nome;
//     this.idade = idade;
//     this.rua  = rua;
//     this.falar = function(){ console.log("OLÁ, SOU "+ this.nome)}
// }

class Pessoa {
    constructor(nome, idade, rua) {
        this.nome = nome;
        this.idade = idade;
        this.rua  = rua;
    }

    falar() {
        console.log(`Olá, sou ${this.nome}`)
    }
}
const pessoa1 = new Pessoa("Homer", 39, "Av. Sempre-verde 742");
const pessoa2 = new Pessoa("Marge", 36, "Av. Sempre-verde 742");

console.log(pessoa1 instanceof Pessoa)
console.log({} instanceof Object)
pessoa1.falar();
pessoa2.falar();

const pessoas = ['João Oliveira', 'Jane Silva', 'Camila Silva', 'Allan Kildare']

const nomesFiltrados = pessoas.filter((item, index) => {
    const sobrenome = item.split(' ')[1]
    return sobrenome === 'Silva'
})
console.log(nomesFiltrados);
