import { useSelector } from 'react-redux';
import { useContext } from 'react';

import { RootState } from '../store/store';
import { userContext } from '../context/userContext';
import { UsersHistoryState } from '../models/models';
import { getAllHistory } from '../utils/getAllHistory';

export function useHistorySearch() {
    const { user } = useContext(userContext);

    const history = useSelector<RootState, UsersHistoryState>(getAllHistory);

    if (!history[user]) {
        return [];
    }
    return history[user];
}
