import { useEffect, useState } from 'react';

export function useDebounce(value: string, delay: number = 300): string {
    const [debounce, setDebounce] = useState('');

    useEffect(() => {
        const debounceHandler = setTimeout(() => setDebounce(value), delay);

        return () => clearTimeout(debounceHandler);
    }, [value, delay]);

    return debounce;
}
