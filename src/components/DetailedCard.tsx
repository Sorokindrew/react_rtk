import React from 'react';

import { DishDetailed } from '../models/models';

interface DetailedCardProps {
    data: DishDetailed
}

export function DetailedCard({ data }: DetailedCardProps) {
    return (
        <>
            <img src={data.thumbnail_url} alt={data.name} />
            <div className="text-2xl mb-5 font-bold">{data.name}</div>
            <div className="mb-5 text-xl italic">{data.description}</div>
            <ul className="list-decimal">
                {data.instructions.map(el => {
                    return (<li>{el.display_text}</li>);
                })
                }
            </ul>
        </>
    );

}