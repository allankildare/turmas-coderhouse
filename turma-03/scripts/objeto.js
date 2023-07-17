const professor = {
    nome: 'Allan',
    idade: 21,
    rua: 'Rua da felicidade',
}

console.log(professor)
console.log(professor.nome)
console.log(professor.idade)
console.log(professor.rua)

professor.curso = 'JavaScript'
console.log(professor)

professor['instituicao'] = 'Coderhouse'
console.log(professor)

professor.nome = 'Allan Kildare'
console.log(professor)

function pessoa(nome, idade, rua) {
    this.nome = nome;
    this.idade = idade;
    this.rua = rua;
}
const pessoa1 = new pessoa("Homer", 39, "Av. Sempre-verde 742");
const pessoa2 = new pessoa("Marge", 36, "Av. Sempre-verde 742");
console.log(pessoa1);
console.log(pessoa2);

function estudante(nome, sobrenome, matricula, numeroTurma) {
    if (!nome || !sobrenome || !matricula || !numeroTurma) {
        console.error('Você deve incluir todos as propriedades')
    } else {
        this.nome = nome
        this.sobrenome = sobrenome
        this.matricula = matricula
        this.numeroTurma = numeroTurma
        this.falar = () => console.log('Olá, eu me chamo ' + this.nome)
    }
}

const estudante1 = new estudante('Allan', 'Kildare', 2466648662, 50785)
console.log(estudante1 instanceof estudante)
estudante1.falar()

for (const propriedade in pessoa1) {
    console.log( pessoa1[propriedade] )
}

class Pessoa {
    constructor(nome, idade, rua) {
        this.nome = nome
        this.idade = idade
        this.rua = rua
    }

    falar() {
        console.log('Olá, eu me chamo ' + this.nome)
    }
}


const pessoa3 = new Pessoa('Allan Kildare', 21, 'Rua fictícia')
console.log(pessoa3)
pessoa3.falar()