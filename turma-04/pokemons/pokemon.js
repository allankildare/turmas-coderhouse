// elementos
const nome = document.querySelector('#nome');
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
    fetch(`https://pokeapi.co/api/v2/pokemon/${nome.value}`, {
        method: 'GET'
    })
        .then((res) => res.json())
        .then((json) => {
            renderizaPokemon(json)
        })
        .catch((erro) => {
            console.error(erro)
            return erro.response
        })
}

async function getPokemonV2() {
    try {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome.value}`)
        const dadosEmJson = await resposta.json()
        
        // apenas se a resposta for bem sucedida que o pokemon será renderizado e o toast emitido
        if(resposta.status === 200) {
            renderizaPokemon(dadosEmJson)

            Toastify({
                text: 'Pokemon encontrado',
                duration: 1000,
                gravity: 'bottom',
                position: 'left',
                style: {
                    background: 'blue',
                }
            }).showToast()
        }
    } catch (erro) {
        swal({
            title: 'Ocorreu um erro',
            text: 'Infelizmente não conseguimos encontrar este Pokemon',
            icon: 'error',
            button: 'Fechar',
            timer: 2000,
        })
        console.error(erro)
    }
}

// evento de clique executa função para solicitar pokemons
document.getElementById('btnBuscaPoke').addEventListener('click', getPokemonV2)

// exemplo de fetch utilizando o método POST
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'Coderhouse',
        body: 'Post de teste',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
