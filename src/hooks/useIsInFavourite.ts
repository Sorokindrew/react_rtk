import { useFavourite } from './useFavourite';

export function useIsInFavourite(id: number) {
    const fav = useFavourite();
    for (const el of fav) {
        if (el.id === id) {
            return [true];
        }
    }
    return [false];
}
