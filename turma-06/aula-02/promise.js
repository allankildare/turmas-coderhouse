const dividir = (valor, divisor) => {
  if (typeof valor !== "number" || typeof divisor !== "number") {
    throw new Error("Valor e divisor devem ser números");
  }
  return new Promise((resolve, reject) => {
    if (divisor === 0) {
      reject("0 não é um divisor válido");
    } else {
      const resultado = valor / divisor;
      resolve(resultado);
    }
  });
};

// opcao 1
dividir(4, 0)
  .then((resultado) => {
    console.log("Resultado é ", resultado);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log('Finalizando promise...')
  })

// opcao 2
async function assincrona() {
    try {
        const resultado = await dividir(4, 0)
        console.log(resultado)
    } catch(error) {
        console.error(error)
    }
}
assincrona()
