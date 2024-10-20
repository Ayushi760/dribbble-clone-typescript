import { User } from "./Common.types";
export interface Designer {
    name: string;
    email: string;
    isCompany: boolean;
    image: string;
}

export interface Design {
    id: number;
    title: string;
    designer: Designer;
    media: string[];
    description: string;
    tags: string[];
}

export interface Category {
    name: string;
    designs: Design[];
}

export interface State {
    users: User[];
    categories: Category[];
    currentUser: User | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
}

export type Action =
    | { type: "REGISTER"; payload: User }
    | { type: "LOGIN"; payload: User }
    | { type: "LOGOUT" }
    | { type: "SET_LOADING"; payload: boolean }
    | { type: "SET_ERROR"; payload: string | null }
    | { type: "SET_CATEGORIES"; payload: Category[] }
    | { type: "SET_USERS"; payload: User[] };


export interface GlobalStateProviderProps {
    children: React.ReactNode;
}