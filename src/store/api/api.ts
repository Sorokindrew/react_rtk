import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ApiResponse, Dish, DishDetailed } from '../../models/models';

export const rapidApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://tasty.p.rapidapi.com',
    }),
    endpoints: build => ({
        searchDish: build.query<Dish[], string>({
            query: () => ({
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
        showDishById: build.query<DishDetailed, number>({
            query: (id: number) => ({
                url: 'recipes/get-more-info',
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
                    'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
                },
                params: {
                    id: id,
                },
            }),
        }),
    }),
});

export const { useSearchDishQuery, useShowDishByIdQuery } = rapidApi;
