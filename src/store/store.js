import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../counter/slices'
import { pokemonSlice } from '../pokemon/slices'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer
  }
})
