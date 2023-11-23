import React from 'react';

import { Navigation } from './Navigation';
import { Authorization } from './Authorization';

export function Header() {
    return (
        <header className="w-full flex justify-between mb-10 py-5 align-middle">
            <div>LOGO</div>
            <div className="flex">
                <Navigation />
                <Authorization />
            </div>
        </header >
    );
}