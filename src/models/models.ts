export interface Dish {
    name: string;
    id: number;
    thumbnail_url: string;
    description: string;
}

export interface Instruction {
    display_text: string;
}

export interface DishDetailed {
    name: string;
    thumbnail_url: string;
    description: string;
    instructions: Instruction[];
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

export interface UsersFavouritesState {
    [key: string]: Dish[];
}

export interface UsersHistoryState {
    [key: string]: string[];
}

export interface Favourite {
    user: string;
    dish: Dish;
}
