import { configureStore } from '@reduxjs/toolkit';

import { logger } from '../utils/logger';
import { changeLS } from '../utils/changeLS';

import { rapidApi } from './api/api';
import { usersReducer } from './usersSlice';
import { usersFavouritesReducer } from './favouritesSlice';
import { userHistoryReducer } from './historySlice';

export const store = configureStore({
    reducer: {
        [rapidApi.reducerPath]: rapidApi.reducer,
        users: usersReducer,
        usersFavourites: usersFavouritesReducer,
        userHistory: userHistoryReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat([rapidApi.middleware, logger, changeLS]),
});

export type RootState = ReturnType<typeof store.getState>;
