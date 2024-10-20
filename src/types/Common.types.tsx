export interface User {
    id: string;
    fullname: string;
    username: string;
    email: string;
    password?: string | "";
}

export interface Artist{
    id:String;
    name:String;
    tags:[];
    designation:String;
    image:String;
}