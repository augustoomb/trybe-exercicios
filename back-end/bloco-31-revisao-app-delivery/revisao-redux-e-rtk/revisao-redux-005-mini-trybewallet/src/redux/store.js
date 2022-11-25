
import { configureStore } from '@reduxjs/toolkit'
import user from './slices/user';
import wallet from './slices/wallet';

const store = configureStore({
  reducer: {
    wallet,
    user
  },
});

export default store;