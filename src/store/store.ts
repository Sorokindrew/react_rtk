import { configureStore } from '@reduxjs/toolkit';

import { rapidApi } from './api/api';

export const store = configureStore({
    reducer: {
        [rapidApi.reducerPath]: rapidApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(rapidApi.middleware),
});
