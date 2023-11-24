import { useSelector } from 'react-redux';

import { FormikData, UsersState } from '../models/models';
import { RootState } from '../store/store';

export function checkIfUserExist(
    login: string,
    users: { [key: string]: string }
) {
    console.log(users.keys);
    return users;
}
