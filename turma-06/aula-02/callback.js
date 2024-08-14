let valores = [1, 2, 3, 4, 5]

// Declaração da função callback (desnecessária em muitos casos)
function callback (valor) {
    if (typeof valor !== 'number') return
    return valor % 2 === 0 // boolean
}

// Callback definida com arrow function
let novosValores = valores.map((valor) => {
    if (typeof valor !== 'number') return
    return valor % 2 === 0
})
console.log(novosValores)