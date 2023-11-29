import React from 'react';

interface UserContext {
    user: string;
    onChange: (value: string) => void;
}

export const userContext = React.createContext<UserContext>({
    user: '',
    onChange: () => {},
});
