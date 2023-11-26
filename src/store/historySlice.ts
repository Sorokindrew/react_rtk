import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Dish, UserHistoryState } from '../models/models';

const initialState: UserHistoryState = {
    history: [],
};

const userHistorySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        addToHistory(state, action: PayloadAction<Dish>) {
            state.history.push(action.payload);
        },
    },
});

export const { addToHistory } = userHistorySlice.actions;
export const userHistoryReducer = userHistorySlice.reducer;
