import { useSelector } from 'react-redux';

import { RootState } from '../store/store';
import { UsersState } from '../models/models';

export function useGetAllUsers() {
    const users = useSelector<RootState, UsersState>(state => state.users);
    return users;
}
