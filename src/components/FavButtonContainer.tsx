import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';

import { addToFavourite, removeFromFavourite } from '../store/favouritesSlice';
import { userContext } from '../context/userContext';
import { Dish } from '../models/models';
import { useIsInFavourite } from '../hooks/useIsInFavourite';

import { FavButton } from './FavButton';

export function FavButtonContainer({ name, id, description, thumbnail_url }: Dish) {
    const [isFavourite] = useIsInFavourite(id);
    const dispatch = useDispatch();
    const { user } = useContext(userContext);
    const cssButton = 'border px-2 py-2 rounded absolute right-0 bottom-0';

    const clickHandler = () => {
        if (!isFavourite) {
            dispatch(addToFavourite({ user: user, dish: { name, id, description, thumbnail_url } }));
        }
        else {
            dispatch(removeFromFavourite({ user: user, dish: { name, id, description, thumbnail_url } }));
        }
    };
    let text = 'Add';
    let color = 'bg-green-500';
    if (isFavourite) {
        text = 'Remove';
        color = 'bg-red-500';
    }

    return (
        <FavButton styles={cssButton + ' ' + color} text={text} onClick={clickHandler} />
    );
}