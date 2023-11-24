export const loginValidator = (value: string) => {
    if (!value.trim()) {
        return 'Required';
    } else if (value.trim().length < 3) {
        return 'Length of login should be more than 3 symbols';
    } else if (value.startsWith(' ')) {
        return 'Login cannot starts with space.';
    }
};

export const passwordValidator = (value: string) => {
    if (!value.trim()) {
        return 'Required';
    } else if (value.length < 6) {
        return 'Password length should be longer than 6 symbols';
    } else if (value.startsWith(' ')) {
        return 'Password cannot starts with space.';
    }
};
