import { configureStore } from '@reduxjs/toolkit';

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
        getDefaultMiddleware().concat(rapidApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
