const listaNomes = []
let   quantidade = 5

// Utilizo do...while para carregar nomes no array por prompt()
do {
   let entrada = prompt("Inserir nome");
   listaNomes.push(entrada.toUpperCase())
   console.log(listaNomes.length)
} while(listaNomes.length != quantidade)

// Concatenamos um novo array de dois elementos
const novaLista = listaNomes.concat(["ANA","EMA"])

// Saída com salto de linha usando join
alert(novaLista.join("\n"))