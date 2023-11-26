export function formatTime(el: number): string {
    return el > 9 ? el.toString() : '0' + el;
}
