import { configureStore } from '@reduxjs/toolkit';

import { rapidApi } from './api/api';
import { usersReducer } from './usersSlice';

export const store = configureStore({
    reducer: {
        [rapidApi.reducerPath]: rapidApi.reducer,
        users: usersReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(rapidApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
