import React from 'react';
import { Link, Navigate } from 'react-router-dom';

import { useHistorySearch } from '../hooks/useHistorySearch';
import { useLoggedUser } from '../hooks/useLoggedUser';

export function History() {
    const [loggedUser] = useLoggedUser();
    const history = useHistorySearch();

    return (
        <>
            {!loggedUser && <Navigate to="/" replace={true} />}
            {loggedUser && <main className="grid grid-cols-3 gap-10 px-5 py-10">

                <ul className="px-5 list-decimal">
                    {history && history.map(el => (
                        <li key={el.id} className="text-2xl mb-1 cursor-pointer hover:text-blue-600">
                            <Link to={`/dish/${el.id}`}>{el.name}</Link>
                        </li>
                    ))}
                    {history.length === 0 && (
                        <div className="text-center text-2xl">No previous search data</div>
                    )}
                </ul>
            </main>}
        </>

    );
}