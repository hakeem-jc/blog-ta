import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const setIsOpenSlice = createSlice({
    name: 'is_open',
    initialState: false,
    reducers: {
        setIsOpen(_state,action:PayloadAction<boolean>){
            return action.payload;
        }
    }
});

// TODO - Add error modal

export const { setIsOpen } = setIsOpenSlice.actions;

export const is_open = setIsOpenSlice.reducer;