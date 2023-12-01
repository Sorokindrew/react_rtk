import React from 'react';

import { DishDetailed } from '../models/models';
import { useLoggedUser } from '../hooks/useLoggedUser';

import { FavButtonContainer } from './FavButtonContainer';

interface DetailedCardProps {
    data: DishDetailed
}

export function DetailedCard({ data }: DetailedCardProps) {
    const [loggedUser] = useLoggedUser();

    return (
        <>
            <img src={data.thumbnail_url} alt={data.name} />
            <div className="text-2xl mb-5 font-bold">{data.name}</div>
            <div className="mb-5 text-xl italic">{data.description}</div>
            <ul className="list-decimal">
                {data.instructions.map(el => {
                    return (<li key={el.display_text}>{el.display_text}</li>);
                })
                }
            </ul>
            {loggedUser && <div className="relative h-[50px]">
                <FavButtonContainer
                    name={data.name}
                    id={data.id}
                    thumbnail_url={data.thumbnail_url}
                    description={data.description}
                />
            </div>}
        </>
    );

}