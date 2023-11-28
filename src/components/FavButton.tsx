import React from 'react';

interface FavButtonProps {
    styles: string;
    text: string;
    onClick: () => void;
}

export function FavButton({ styles, text, onClick }: FavButtonProps) {


    return (
        <button className={styles}
            onClick={onClick}>
            {text}
        </button>
    );
}