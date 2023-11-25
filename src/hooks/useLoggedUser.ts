import { useContext } from 'react';

import { userContext } from '../context/userContext';

export function useLoggedUser() {
    const { value } = useContext(userContext);
    return [!!value];
}
