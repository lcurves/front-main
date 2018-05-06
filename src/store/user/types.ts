
export interface User {
    firstName: string;
    lastName: string;
    email: string;
}

export interface UserState {
    user?: User;
    errorMessage?: any;
    error: boolean;
    isAuthenticating: boolean;
}
