import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { is_open } from '../features/modal/modalSlice';

const rootReducer = combineReducers({
  is_open,
})

export const store = configureStore({
  reducer: rootReducer
})



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;