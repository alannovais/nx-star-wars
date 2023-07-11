export interface User {
    id: number | null;
    name: string;
    login: string;
    password: string;
    actived?: boolean;
}
