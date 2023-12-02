import { useSelector } from 'react-redux';
import { useContext } from 'react';

import { RootState } from '../store/store';
import { Dish } from '../models/models';
import { userContext } from '../context/userContext';

export function useHistorySearch() {
    const { user } = useContext(userContext);

    const history = useSelector<RootState, string[]>(
        state => state.userHistory[user]
    );

    return history === undefined ? [] : history;
}
