import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Teste',
  email: 'teste@teste.com.br'
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload
    },
    changeEmail:  (state, action) => {
      state.email = action.payload
    },
  },
});

export const { changeName, changeEmail } = userSlice.actions
export default userSlice.reducer