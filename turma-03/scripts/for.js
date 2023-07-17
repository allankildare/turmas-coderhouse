// for (let indice = 1; indice <= 10; indice++) {
//     console.log('Número ', indice)
// }

console.log('Contagem regressiva')
// for (let indice = 10; indice >= 0; indice = indice - 1) {
//     console.log(indice)
// }

const estudantes = ['Alexandre', 'Arthur', 'Jullyana', 'Kaue', 'Thalles', 'Isaac', 'Allan']
console.log(estudantes.length)

for (let i = 0; i < estudantes.length; i++) {
    console.log('aluno: ' + estudantes[i])
}

const stringENumeros = ['Colher', 'Garfo', 'Panela', 75, 'Torneira']

for (let i = 0; i < stringENumeros.length; i++) {
    if (typeof stringENumeros[i] != 'string') break
    console.log(stringENumeros[i])
}
console.log('__________________________')
for (let i = 0; i < stringENumeros.length; i++) {
    if (typeof stringENumeros[i] != 'string') continue
    console.log(stringENumeros[i])
}

for (var i = 0; i < 10; i++) {
    if ((i === 2) || (i === 6)) {
        console.log('Olá Coder ' + i)
    }
}