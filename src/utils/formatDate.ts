import { formatTime } from './formatTime';

export function formatDate(date: Date): string {
    const dateString = `${date.getDate()}/${
        date.getMonth() + 1
    }/${date.getFullYear()}`;
    const hours = formatTime(date.getHours());
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());
    return dateString + ' ' + hours + ':' + minutes + ':' + seconds;
}
