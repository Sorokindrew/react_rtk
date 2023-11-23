import React from 'react';
import { Link } from 'react-router-dom';

export function Navigation() {


    return (
        <nav className="flex  space-x-3 mr-10 px-1 py-1">
            <Link to="/" className="text-lg">Main</Link>
            <Link to="/favourites" className="text-lg">Favourite</Link>
        </nav>
    );
}
