const poke = document.getElementById('poke')
const btnPoke = document.getElementById('btnPoke')

function renderizaNome(nome) {
    const h1 = document.createElement('h1')
    h1.textContent = `Nome: ${nome}`
    document.body.appendChild(h1)
}

// function pesquisarPokemon(pokemon) {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
//         .then((response) => {
//             return response.json()
//         })
//         .then((json) => {
//             renderizaNome(json.name)
//         })
//         .catch((error) => {
//             console.log(error)
//             Toastify({
//                 text: 'Não foi possível encontrar o seu Pokémon',
//                 duration: 2,
//                 className: 'error'
//             }).showToast()
//         })
// }

async function pesquisarPokemon(pokemon) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    console.log(res.status)
    const json = await res.json()

    if (res.status === 200) {
        renderizaNome(json.name)
    } else {
        Toastify({
            text: 'Não foi possível encontrar o seu Pokémon',
            duration: 2,
            className: 'error'
        }).showToast()
    }
}

btnPoke.addEventListener('click', (event) => {
    pesquisarPokemon(poke.value)
})

fetch('./usuario.json')
    .then((res) => {
        return res.json()
    })
    .then((json) => console.log(json))