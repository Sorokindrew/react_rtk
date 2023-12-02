import { store } from '../store/store';

export function getUsers() {
    return store.getState().users;
}
