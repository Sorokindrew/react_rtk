import React from 'react';

import { Navigation } from './Navigation';

export function Header() {
    return (
        <header className="w-full flex justify-between mb-10 py-5">
            <div>LOGO</div>
            <Navigation />
        </header>
    );
}