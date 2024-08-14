const objetos = [
  {
    macas: 3,
    peras: 2,
    carne: 1,
    frango: 5,
    doces: 2,
  },
  {
    macas: 1,
    cafes: 1,
    ovos: 6,
    frango: 1,
    paes: 4,
  },
];

let tiposProdutos = [];

// Iterar sobre os objetos para extrair e agregar tipos de produtos
//              2 < 2
//                                  i=i+1
//                                  i+=1
for (let i = 0; i < objetos.length; i++) {
  //                       objetos[0]
  let chaves = Object.keys(objetos[i]);
  //           ['macas', 'peras', 'carne' ...]               

  //
  chaves.forEach((produto) => {
    if (!tiposProdutos.includes(produto)) {
      tiposProdutos.push(produto);
    }
  });
}

console.log("Tipos de produtos:", tiposProdutos);

// Calcular o total de produtos vendidos
let totalProdutosVendidos = 0;

for (let i = 0; i < objetos.length; i++) {
  let valores = Object.values(objetos[i]);
  valores.forEach((quantidade) => {
    totalProdutosVendidos += quantidade;
  });
}

// 

console.log("Total produtos vendidos: ", totalProdutosVendidos);
