import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { FormikData, UsersState } from '../models/models';
import { getFromLS } from '../utils/localStoreData';

const initialState: UsersState = getFromLS('users');

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser(state, action: PayloadAction<FormikData>) {
            state[action.payload.login] = action.payload.password;
        },
    },
});

export const { addUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
