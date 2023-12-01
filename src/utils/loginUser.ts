import { saveToLS } from './localStoreData';

export function loginUser(user: string, onLogin: (value: string) => void) {
    onLogin(user);
    saveToLS('activeUser', JSON.stringify(user));
}
