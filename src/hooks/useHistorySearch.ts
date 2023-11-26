import { useSelector } from 'react-redux';

import { RootState } from '../store/store';
import { Dish } from '../models/models';

export function useHistorySearch() {
    const history = useSelector<RootState, Dish[]>(
        state => state.userHistory.history
    );

    return history;
}
