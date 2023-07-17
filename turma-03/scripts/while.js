// let contador = 0
// while (true) {
//     console.log(contador + '. Ao infinito e além');
//     contador++
// }

let entrada = prompt("Inserir um dado")
//Repetimos com while até que o usuário insira "ESC“.
while (entrada != "ESC") {
    alert("O usuário inseriu " + entrada);
    //Solicitamos novamente um dado. Na próxima iteração, será verificado se não é ESC.
    entrada = prompt("Inserir outro dado");
}
