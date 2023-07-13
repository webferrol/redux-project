import { pokemonAPI } from '../../api/pokemonAPI'
import { setIsLoading, setPokemons } from './pokemon-slice'

// const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon'

export function getPokemons (page = 0, limit = 10) {
  return async (dispatch, getState) => {
    dispatch(setIsLoading(true))

    // Realizar petición http con fetch
    // const response = await fetch(`${POKEMON_URL}?limit=${limit}&offset=${page * limit}`)
    // const data = await response.json()

    // axios
    const { data } = await pokemonAPI.get(`/pokemon?limit=${limit}&offset=${page * limit}`)
    dispatch(setPokemons({
      nextPage: page + 1,
      pokemons: data.results
    }))

    // dispatch setPokemon
  }
}
