import { Middleware } from '@reduxjs/toolkit';

import {
    addHistoryToLS,
    removeFavouritesFromLS,
    saveFavouritesToLS,
    saveUsersToLS,
} from './localStoreData';

export const changeLS: Middleware = store => next => action => {
    switch (action.type) {
        case 'users/addUser': {
            saveUsersToLS(action);
            break;
        }
        case 'favourites/addToFavourite': {
            saveFavouritesToLS(action);
            break;
        }
        case 'favourites/removeFromFavourite': {
            removeFavouritesFromLS(action);
            break;
        }
        case 'history/addToHistory': {
            addHistoryToLS(action);
            break;
        }
    }
    return next(action);
};
