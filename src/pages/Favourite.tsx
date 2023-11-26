import React from 'react';

import { DishCard } from '../components/DishCard';
import { useFavourite } from '../hooks/useFavourite';

export function Favourite() {

    const favourites = useFavourite();

    return (
        <main className="grid grid-cols-3 gap-10 px-5 py-10">
            {favourites && favourites.map(item => {
                return (
                    <DishCard key={item.id}
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        thumbnail_url={item.thumbnail_url} />
                );
            })
            }
            {favourites.length === 0 && (
                <div className="text-center text-2xl col-span-3">No favourite dishes added.</div>
            )}
        </main>
    );
}