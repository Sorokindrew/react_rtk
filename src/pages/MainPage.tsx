import React from 'react';

import { Content } from '../components/Content';
import { useSearchDishQuery } from '../store/api/api';

export function MainPage() {
    const { data } = useSearchDishQuery('');


    return (
        <>
            <Content data={data} />
        </>
    );
}