import { useContext } from 'react';

import { userContext } from '../context/userContext';

export function useLoggedUser() {
    const { user } = useContext(userContext);
    return [!!user];
}
