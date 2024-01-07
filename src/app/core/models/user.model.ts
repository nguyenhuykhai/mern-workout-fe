export interface User {
    _id?: string;
    username?: string;
    fullName?: string;
    email?: string;
    createAt?: Date;
    is_admin?: Boolean;
    is_user?: Boolean;
}