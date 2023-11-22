import React from 'react';
import { Link } from 'react-router-dom';

export function Navigation() {
    return (
        <nav className="flex  space-x-3">
            <Link to="/">Main</Link>
            <Link to="/favourites">Favourite</Link>
            <button className="border bg-gray-100 mr-2">Sign in</button>
            <button className="border bg-gray-100">Sign up</button>
        </nav>
    );
}
