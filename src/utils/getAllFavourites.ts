import { store } from '../store/store';

export function getAllFavourites() {
    return store.getState().usersFavourites;
}
