import { useParams } from 'react-router-dom';

import { useShowDishByIdQuery } from '../store/api/api';
import { DetailedCard } from '../components/DetailedCard';

export function DishPage() {
    const param = useParams<'id'>();
    const { data, isLoading } = useShowDishByIdQuery(Number(param.id));

    return (
        <main className="px-5 py-10">
            {isLoading && (
                <div className="text-2xl text-center">Loading...</div>
            )}
            {!isLoading && data && <DetailedCard data={data} />}
            {!isLoading && !data && (<div>No data</div>)}
        </main>
    );
}