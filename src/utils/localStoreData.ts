import { PayloadAction } from '@reduxjs/toolkit';

import {
    Favourite,
    FormikData,
    SearchHistoryPayload,
    UsersFavouritesState,
    UsersState,
} from '../models/models';

export function saveToLS(tag: string, data: string) {
    localStorage.setItem(tag, data);
}

export function getFromLS(tag: string) {
    return JSON.parse(localStorage.getItem(tag) || '{}');
}

export function saveUsersToLS(action: PayloadAction<FormikData>) {
    const savedUsers: UsersState = getFromLS('users');
    savedUsers[action.payload.login] = action.payload.password;
    saveToLS('users', JSON.stringify(savedUsers));
}

export function saveFavouritesToLS(action: PayloadAction<Favourite>) {
    const favourites: UsersFavouritesState = getFromLS('favourites');
    if (favourites[action.payload.user] === undefined) {
        favourites[action.payload.user] = [];
    }
    favourites[action.payload.user].push(action.payload.dish);
    saveToLS('favourites', JSON.stringify(favourites));
}

export function removeFavouritesFromLS(action: PayloadAction<Favourite>) {
    const favourites: UsersFavouritesState = getFromLS('favourites');
    favourites[action.payload.user] = favourites[action.payload.user].filter(
        el => el.id !== action.payload.dish.id
    );
    saveToLS('favourites', JSON.stringify(favourites));
}

export function addHistoryToLS(action: PayloadAction<SearchHistoryPayload>) {
    const history = getFromLS('history');
    if (history[action.payload.user] === undefined) {
        history[action.payload.user] = [];
    }
    history[action.payload.user].push(action.payload.search);
    saveToLS('history', JSON.stringify(history));
}
