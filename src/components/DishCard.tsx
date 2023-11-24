import React, { useContext } from 'react';

import { Dish } from '../models/models';
import { userContext } from '../context/userContext';

import { FavButton } from './FavButton';

export function DishCard({ name, id, description, thumbnail_url }: Dish) {
    const { value } = useContext(userContext);

    return (
        <div className="relative pb-10">
            <a
                target="_blank"
                href="#"
                key={id}
                className="cursor-pointer"
            >
                <img
                    src={`${thumbnail_url}`}
                    alt={`${name}`}
                    className="h-[200px] mx-auto"
                />
                <p className="font-bold text-xl px-1 py-1 text-center">{`${name}`}</p>
                <p className="px-1 py-1">{`${description}`}</p>
            </a>
            {value && <FavButton name={name} id={id} thumbnail_url={thumbnail_url} description={description} />}
        </div>
    );
}