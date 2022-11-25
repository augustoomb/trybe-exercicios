import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tipoFormulario: 'inclusao',
  currencies: [],
  expenses: [
    {
      id: 0,
      name: 'bili bili',
      currency: 'USD',
      value: 10
    }
  ]
}

// export const getCurrenciesAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount) => {
//     // const response = await fetchCurrencies(amount);
//     // remove USDT
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//     // dispatch({type: getCurrenciesAsync.FULLFILLED, payload: data});
//   }
// );

// const myThunk = () =>{
//   return (dispatch) => {
//     // fetch
//     dispatch({type: 'COISO', payload: data});
//   }
// }

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    changeCurrencies: (state, action) => {
      // immer
      state.currencies = action.payload
    },
    addExpense:  (state, action) => {
      state.expenses.push({ id: state.expenses.length, ...action.payload })
    },
    updateExpense:  (state, action) => {
      state.expenses = state.expenses.map(expense =>{
        if(expense.id === action.payload.id)
          return action.payload;
        else
          return expense;
      });
    },
    deleteExpense:  (state, action) => {
      state.expenses = state.expenses.filter(expense =>
        (!(expense.id === action.payload.id)))
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getCurrenciesAsync.pending, (state) => {
  //       state.loading = 'loading';
  //     });
  // },
});

export const { changeCurrencies, addExpense, updateExpense, deleteExpense } = walletSlice.actions
export default walletSlice.reducer