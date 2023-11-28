import { useContext } from 'react';
import { useSelector } from 'react-redux';

import { userContext } from '../context/userContext';
import { Dish } from '../models/models';
import { RootState } from '../store/store';

export function useFavourite() {
    const { user } = useContext(userContext);
    const favourites = useSelector<RootState, Dish[]>(state => {
        if (!state.usersFavourites[user]) {
            return [];
        }
        return state.usersFavourites[user];
    });
    return favourites;
}
