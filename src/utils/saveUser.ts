import { Middleware } from '@reduxjs/toolkit';

import { UsersState } from '../models/models';

import { getFromLS, saveToLS } from './localStoreData';

export const saveUser: Middleware = store => next => action => {
    const savedUsers: UsersState = getFromLS('users');
    if (action.type === 'users/addUser') {
        savedUsers[action.payload.login] = action.payload.password;
        saveToLS('users', JSON.stringify(savedUsers));
    }
    return next(action);
};
