import { store } from '../store/store';

export function getAllHistory() {
    return store.getState().userHistory;
}
