import { useSelector } from 'react-redux';

import { RootState } from '../store/store';
import { UsersState } from '../models/models';
import { getUsers } from '../utils/getUsers';

export function useGetAllUsers() {
    const users = useSelector<RootState, UsersState>(getUsers);
    return users;
}
