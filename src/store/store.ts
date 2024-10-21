import { configureStore } from '@reduxjs/toolkit';
import marblesReducer from '@/store/marbles.slice';

const store = configureStore({
  reducer: {
    marbles: marblesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
