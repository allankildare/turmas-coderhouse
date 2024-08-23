const fs = require('fs');

function gerarNumerosAleatorios(min, max) {
  const numerosAleatorios = [];
  const quantidade = 10000
  
  for (let i = 0; i < quantidade; i++) {
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    numerosAleatorios.push(numeroAleatorio);
  }

  return numerosAleatorios;
}

const numeros = gerarNumerosAleatorios(1, 20);

const contagem = {};

numeros.forEach((numero) => {
  //          1: ...
  if (contagem[numero]) {
    contagem[numero]++;
  } else {
    contagem[numero] = 1;
  }
});

console.log(contagem)

// Opcional: Salvar os números gerados em um arquivo
fs.writeFileSync('randomnumeros.txt', numeros.join('\n'), 'utf8');

console.log('10.000 números aleatórios foram gerados e salvos em randomNumbers.txt');
