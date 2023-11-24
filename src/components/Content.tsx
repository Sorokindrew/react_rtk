import React from 'react';

import { Dish } from '../models/models';

import { FavButton } from './FavButton';


interface ContentProps {
    data?: Dish[]
}

export function Content({ data }: ContentProps) {

    return (
        <main className="grid grid-cols-3 gap-10 px-5 py-10">

            {data?.map(item => {
                return (
                    <div className="relative pb-10">
                        <a target="_blank" href="#" key={item.id} className="cursor-pointer">
                            <img src={`${item.thumbnail_url}`} alt={`${item.name}`} className="h-[200px] mx-auto" />
                            <p className="font-bold text-xl px-1 py-1 text-center">{`${item.name}`}</p>
                            <p className="px-1 py-1">{`${item.description}`}</p>
                        </a>
                        <FavButton />
                    </div>
                );
            })}

        </main>
    );
}