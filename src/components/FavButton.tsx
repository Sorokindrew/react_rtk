import React, { useState } from 'react';

export function FavButton() {
    const [isFavourite, setIsFavourite] = useState(false);

    const clickHandler = () => setIsFavourite(prev => !prev);
    let text = 'Add';
    let color = 'green';
    if (isFavourite) {
        text = 'Remove';
        color = 'red';
    }

    return (
        <button className={`bg-${color}-500 px-2 py-2 rounded absolute right-0 bottom-0`} onClick={clickHandler}>{text}</button>
    );
}