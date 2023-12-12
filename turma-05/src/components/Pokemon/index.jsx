import { useState } from 'react'
import styles from './styles.module.css'
import userIcon from './../../images/user_default.jpg'

function Pokemon() {
  // estados
  const [pokemon, setPokemon] = useState('')
  const [pokemonResponse, setPokemonResponse] = useState({})

  // função para requisitar os Pokemons na PokeAPI
  function getPokemon() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
    })
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        // atualização do estado
        setPokemonResponse(json)
      })
      .catch((error) => {
        // tratativa para erro
        return error
      })
  }

  // atualiza o texto para pesquisar o pokemon apenas quando o input perder o foco (evento blur)
  function handleBlur(event) {
    setPokemon(event.target.value)
  }

  // evita o comportamento padrão da tag form de submit quando pressionado o Enter
  function avoidSubmit(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
      event.preventDefault()
    }
  }

  return (
    <>
      <h1>PokéAPI</h1>
      <form className={styles.pokemonForm} onKeyDown={avoidSubmit}>
        <input type="text" onBlur={handleBlur} />
        <button type="button" onClick={getPokemon} title="Clique para buscar pelo pokemon">
          Buscar
        </button>
      </form>

      <section className={styles.pokemonContainer}>
        <img src={pokemonResponse?.sprites?.front_default || userIcon} alt="Imagem do Pokémon" />
        {pokemonResponse.hasOwnProperty('name') && <p>Nome: <strong>{pokemonResponse.name}</strong></p>}
      </section>
    </>
  )
}

export default Pokemon