import { useContext } from 'react';
import { useSelector } from 'react-redux';

import { userContext } from '../context/userContext';
import { UsersFavouritesState } from '../models/models';
import { RootState } from '../store/store';
import { getAllFavourites } from '../utils/getAllFavourites';

export function useFavourite() {
    const { user } = useContext(userContext);

    const favourites = useSelector<RootState, UsersFavouritesState>(
        getAllFavourites
    );

    if (!favourites[user]) {
        return [];
    }
    return favourites[user];
}
