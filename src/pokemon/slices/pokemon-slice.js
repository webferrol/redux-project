import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    isLoading: false,
    pokemons: [],
    nextPage: 0,
    error: null
  },
  reducers: {
    setIsLoading: (state, actions) => {
      state.isLoading = actions.payload
    },
    setPokemons: (state, actions) => {
      state.isLoading = false
      state.nextPage = actions.payload.nextPage
      state.pokemons = actions.payload.pokemons
    }
  }
})

// Action creators are generated for each case reducer function
export const { setIsLoading, setPokemons } = pokemonSlice.actions
