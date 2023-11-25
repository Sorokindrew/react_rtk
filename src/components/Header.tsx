import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { useLoggedUser } from '../hooks/useLoggedUser';
import { userContext } from '../context/userContext';

import { Navigation } from './Navigation';
import { Authorization } from './Authorization/Authorization';


export function Header() {
    const [loggedUser] = useLoggedUser();
    const { onChange } = useContext(userContext);

    return (
        <header className="w-full flex justify-between mb-10 py-5 align-middle">
            <Link to="/">LOGO</Link>
            <div className="flex">
                <Navigation loggedUser={loggedUser} />
                <Authorization loggedUser={loggedUser} onLogout={onChange} />
            </div>
        </header >
    );
}