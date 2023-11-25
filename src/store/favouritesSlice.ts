import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Favourite, UsersFavouritesState } from '../models/models';

const initialState: UsersFavouritesState = {};

const usersFavouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        addToFavourite(state, action: PayloadAction<Favourite>) {
            if (state[action.payload.user] === undefined) {
                state[action.payload.user] = [];
            }
            state[action.payload.user].push(action.payload.dish);
        },
        removeFromFavourite(state, action: PayloadAction<Favourite>) {
            state[action.payload.user] = state[action.payload.user].filter(
                el => el.id !== action.payload.dish.id
            );
        },
    },
});

export const usersFavouritesReducer = usersFavouritesSlice.reducer;
export const { addToFavourite, removeFromFavourite } =
    usersFavouritesSlice.actions;
