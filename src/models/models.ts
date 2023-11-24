export interface Dish {
    name: string;
    id: number;
    thumbnail_url: string;
    description: string;
}

export interface ApiResponse {
    results: Dish[];
}

export interface FormProps {
    isRegistered: boolean;
    closeModal: () => void;
}

export interface UsersState {
    users: { [key: string]: string };
}

export interface FormikData {
    login: string;
    password: string;
}

export interface NavigationProps {
    loggedUser: boolean;
}
export interface AuthorizationProps {
    loggedUser: boolean;
    onLogout: (value: string) => void;
}
