import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { SearchHistoryPayload, UserHistoryState } from '../models/models';
import { getFromLS } from '../utils/localStoreData';

const initialState: UserHistoryState = getFromLS('history');

const userHistorySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        addToHistory(state, action: PayloadAction<SearchHistoryPayload>) {
            if (state[action.payload.user] === undefined) {
                state[action.payload.user] = [];
            }
            state[action.payload.user].push(action.payload.search);
        },
    },
});

export const { addToHistory } = userHistorySlice.actions;
export const userHistoryReducer = userHistorySlice.reducer;
