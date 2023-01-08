import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { is_open } from '../features/modal/modalSlice';
import { current_post } from '../features/post/postSlice';
import { form_type } from '../features/form/formSlice';

const rootReducer = combineReducers({
  is_open,
  current_post,
  form_type
})

export const store = configureStore({
  reducer: rootReducer
})



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;