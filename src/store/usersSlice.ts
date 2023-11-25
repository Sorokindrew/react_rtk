import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { FormikData, UsersState } from '../models/models';
import { saveToLS, getFromLS } from '../utils/localStoreData';

const initialState: UsersState = {
    users: getFromLS('users'),
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser(state, action: PayloadAction<FormikData>) {
            state.users[action.payload.login] = action.payload.password;
            saveToLS('users', JSON.stringify(state.users));
        },
    },
});

export const { addUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
