import { configureStore } from '@reduxjs/toolkit';

import { logger } from '../utils/logger';
import { saveUser } from '../utils/saveUser';

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
        getDefaultMiddleware().concat([rapidApi.middleware, logger, saveUser]),
});

export type RootState = ReturnType<typeof store.getState>;
