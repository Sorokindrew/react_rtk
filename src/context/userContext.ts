import React from 'react';

interface UserContext {
    value: string;
    onChange: (value: string) => void;
}

export const userContext = React.createContext<UserContext>({
    value: '',
    onChange: () => {},
});
