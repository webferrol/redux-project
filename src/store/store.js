import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../counter/slices'
import { pokemonSlice } from '../pokemon/slices'
import { todoApi } from '../todo/api/todoApi'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
    [todoApi.reducerPath]: todoApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(todoApi.middleware)
  }
})
