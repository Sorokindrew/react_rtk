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
                    'X-RapidAPI-Key':
                        '60b585d408mshe86f0d2e179bff6p12a1b0jsn2e376513e31d',
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
