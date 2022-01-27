import { createSlice } from '@reduxjs/toolkit'

// source : https://redux-toolkit.js.org/tutorials/quick-start

const initialState = {
  value: 0,
}

// reducer functions th at recieve action from dispatch()
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
    incrementByAmount: (state,action) => { state.value += action.payload }
  }
})

// export the action creators that modify state
export const { increment, decrement, incrementByAmount } = counterSlice.actions
// exports the reducer function
export const selectCount = (state) => state.counter.value
export default counterSlice.reducer
