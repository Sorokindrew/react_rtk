import React from 'react';
import { Navigate } from 'react-router-dom';

import { DishCard } from '../components/DishCard';
import { useFavourite } from '../hooks/useFavourite';
import { useLoggedUser } from '../hooks/useLoggedUser';

export function Favourite() {
    const [loggedUser] = useLoggedUser();
    const favourites = useFavourite();

    return (
        <>
            {!loggedUser && <Navigate to="/" replace={true} />}
            {loggedUser && <main className="grid grid-cols-3 gap-10 px-5 py-10">
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
            </main>}
        </>
    );
}