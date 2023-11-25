import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addToFavourite, removeFromFavourite } from '../store/favouritesSlice';
import { userContext } from '../context/userContext';
import { Dish } from '../models/models';
import { useIsInFavourite } from '../hooks/useIsInFavourite';

export function FavButton({ name, id, description, thumbnail_url }: Dish) {
    const [initial] = useIsInFavourite(id);
    const [isFavourite, setIsFavourite] = useState(initial);
    const dispatch = useDispatch();
    const { value } = useContext(userContext);

    const clickHandler = () => {
        setIsFavourite(prev => !prev);
        if (!isFavourite) {
            dispatch(addToFavourite({ user: value, dish: { name, id, description, thumbnail_url } }));
        }
        else {
            dispatch(removeFromFavourite({ user: value, dish: { name, id, description, thumbnail_url } }));
        }
    };
    let text = 'Add';
    let color = 'green';
    if (isFavourite) {
        text = 'Remove';
        color = 'red';
    }

    return (
        <button className={`border px-2 py-2 rounded absolute right-0 bottom-0 bg-${color}-600`} onClick={clickHandler}>{text}</button>
    );
}