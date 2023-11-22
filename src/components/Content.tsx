import React from 'react';

import { Dish } from '../models/models';


interface ContentProps {
    data?: Dish[]
}

export function Content({ data }: ContentProps) {
    // console.log(data);

    return (
        <main className="grid grid-cols-3 gap-10">

            {data?.map(item => {
                return (
                    <a target="_blank" href="#" key={item.id} className="cursor-pointer">
                        <img src={`${item.thumbnail_url}`} alt={`${item.name}`} className="h-[200px] mx-auto" />
                        <p className="font-bold text-[24px] px-1 py-1 text-center">{`${item.name}`}</p>
                        <p className="px-1 py-1">{`${item.description}`}</p>
                    </a>
                );
            })}

        </main>
    );
}