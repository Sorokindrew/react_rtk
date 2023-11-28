import React from 'react';
import { Link } from 'react-router-dom';

import { useHistorySearch } from '../hooks/useHistorySearch';

export function History() {

    const history = useHistorySearch();

    return (
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

    );
}