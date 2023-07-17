let numero = 0;
do {
   //Repetimos com do...while enquanto o usuário inserir um n°
   numero = prompt("Inserir Número")
   console.log(numero)
//Se o “parse” não resultar em um número, o loop será interrompido.   
} while(parseInt(numero))