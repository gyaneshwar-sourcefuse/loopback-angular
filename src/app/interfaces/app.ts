export enum Role {
    SuperAdmin = 1,
    Admin,
    Subscriber
}

export interface User {
    id: string;
    name: string;
    email: string;
    role?: Role;
    createdAt: string;
}