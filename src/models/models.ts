export interface Dish {
    name: string;
    id: number;
    thumbnail_url: string;
    description: string;
}

export interface ApiResponse {
    results: Dish[];
}
