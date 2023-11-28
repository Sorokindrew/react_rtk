import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Favourite, UsersFavouritesState } from '../models/models';
import { getFromLS, saveToLS } from '../utils/localStoreData';

const initialState: UsersFavouritesState = getFromLS('favourites');

const usersFavouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        addToFavourite(state, action: PayloadAction<Favourite>) {
            if (state[action.payload.user] === undefined) {
                state[action.payload.user] = [];
            }
            state[action.payload.user].push(action.payload.dish);
            saveToLS('favourites', JSON.stringify(state));
        },
        removeFromFavourite(state, action: PayloadAction<Favourite>) {
            state[action.payload.user] = state[action.payload.user].filter(
                el => el.id !== action.payload.dish.id
            );
            saveToLS('favourites', JSON.stringify(state));
        },
    },
});

export const usersFavouritesReducer = usersFavouritesSlice.reducer;
export const { addToFavourite, removeFromFavourite } =
    usersFavouritesSlice.actions;
