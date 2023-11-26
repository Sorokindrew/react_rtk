import React from 'react';

import { Dish } from '../models/models';

import { DishCard } from './DishCard';


interface ContentProps {
    data?: Dish[]
}

export function Content({ data }: ContentProps) {

    return (
        <main className="grid grid-cols-3 gap-10 px-5 py-10">

            {data?.map(item => {
                return (
                    <DishCard key={item.id}
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        thumbnail_url={item.thumbnail_url} />
                );
            })}

        </main>
    );
}