import React from 'react';

import { Content } from '../components/Content';
import { useSearchDishQuery } from '../store/api/api';

export function MainPage() {
    const { data, isLoading } = useSearchDishQuery('');


    return (
        <>
            {isLoading && (
                <div className="text-2xl text-center">Loading...</div>
            )}
            <Content data={data} />
        </>
    );
}