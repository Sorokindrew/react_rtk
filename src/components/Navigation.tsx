import React from 'react';
import { Link } from 'react-router-dom';

import { NavigationProps } from '../models/models';

export function Navigation({ loggedUser }: NavigationProps) {


    return (
        <nav className="flex  space-x-3 mr-10 px-1 py-1">
            {loggedUser && (
                <>
                    <Link to="/search" className="text-xl hover:text-gray-500 hover:underline">Search</Link>
                    <Link to="/favourites" className="text-xl hover:text-gray-500 hover:underline">Favourite</Link>
                    <Link to="/history" className="text-xl hover:text-gray-500 hover:underline">History</Link>
                </>)
            }
            {!loggedUser && (
                <Link to="/search" className="text-xl hover:text-gray-500 hover:underline">Search</Link>
            )
            }

        </nav>
    );
}
