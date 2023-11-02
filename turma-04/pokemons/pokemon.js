// elementos
const nome = document.querySelector('#nome')
const container = document.getElementById('container')

// função para renderizar pokemons na página
function renderizaPokemon(pokemon) {
    const pokeContainer = document.getElementById('pokemonContainer')
    // se container para pokemon já tiver sido criado, apenas muda a imagem
    if (pokeContainer) {
        const pokeImg = document.createElement('img')
        pokeImg.setAttribute('src', pokemon.sprites.front_default)
        pokeContainer.innerHTML = '' // retira os elementos filhos da div pokemonContainer
        pokeContainer.appendChild(pokeImg)
    } else {
        // cria a div pokemonContainer via DOM
        const pokeDiv = document.createElement('div')
        pokeDiv.id = 'pokemonContainer'
        const pokeImg = document.createElement('img')
        pokeImg.setAttribute('src', pokemon.sprites.front_default)
        pokeDiv.appendChild(pokeImg)
        container.appendChild(pokeDiv)
    }
}

// função para requisitar dinamicamente os pokemons
function getPokemon() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${nome.value}`)
        .then((res) => res.json())
        .then((json) => {
            renderizaPokemon(json)
        })
        .catch((erro) => {
            console.error(erro)
            return erro.response
        })
}

// evento de clique executa função para solicitar pokemons
document.getElementById('btnBuscaPoke').addEventListener('click', getPokemon)