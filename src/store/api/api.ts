import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ApiResponse, Dish } from '../../models/models';

export const rapidApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://tasty.p.rapidapi.com',
    }),
    endpoints: build => ({
        searchDish: build.query<Dish[], string>({
            query: (search: string) => ({
                url: 'recipes/list',
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
                    'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
                },
                params: {
                    size: '20',
                },
            }),
            transformResponse: (response: ApiResponse) => response.results,
        }),
    }),
});

export const { useSearchDishQuery } = rapidApi;
