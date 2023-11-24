import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { FormikData, UsersState } from '../models/models';

const initialState: UsersState = {
    users: JSON.parse(localStorage.getItem('users') || '[]'),
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser(state, action: PayloadAction<FormikData>) {
            state.users[action.payload.login] = action.payload.password;
            localStorage.setItem('users', JSON.stringify(state.users));
        },
    },
});

export const { addUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
