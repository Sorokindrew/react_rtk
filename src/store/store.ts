import { configureStore } from '@reduxjs/toolkit';

import { rapidApi } from './api/api';
import { usersReducer } from './usersSlice';
import { usersFavouritesReducer } from './favouritesSlice';

export const store = configureStore({
    reducer: {
        [rapidApi.reducerPath]: rapidApi.reducer,
        users: usersReducer,
        usersFavourites: usersFavouritesReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(rapidApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
