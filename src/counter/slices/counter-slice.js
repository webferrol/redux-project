import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementBy: (state, actions) => {
      state.count += actions.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementBy } = counterSlice.actions
