import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  name: ''
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
  },
});

// const INCREMENT = 'INCREMENT'
// const increment = (payload) => {
//   return {type: INCREMENT, payload}
// }
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer