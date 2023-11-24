export function saveToLS(tag: string, data: string) {
    localStorage.setItem(tag, data);
}

export function getFromLS(tag: string) {
    return JSON.parse(localStorage.getItem(tag) || '[]');
}
