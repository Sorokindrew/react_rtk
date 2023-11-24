import React, { useContext } from 'react';

import { userContext } from '../context/userContext';
import { ifLogged } from '../utils/ifLogged';

import { Navigation } from './Navigation';
import { Authorization } from './Authorization/Authorization';


export function Header() {
    const { value, onChange } = useContext(userContext);
    const loggedUser = ifLogged(value);

    return (
        <header className="w-full flex justify-between mb-10 py-5 align-middle">
            <a href="/">LOGO</a>
            <div className="flex">
                <Navigation loggedUser={loggedUser} />
                <Authorization loggedUser={loggedUser} onLogout={onChange} />
            </div>
        </header >
    );
}