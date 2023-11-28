import { useSelector } from 'react-redux';
import { useContext } from 'react';

import { RootState } from '../store/store';
import { Dish } from '../models/models';
import { userContext } from '../context/userContext';

export function useHistorySearch() {
    const { value } = useContext(userContext);

    const history = useSelector<RootState, Dish[]>(
        state => state.userHistory[value]
    );

    return history === undefined ? [] : history;
}
