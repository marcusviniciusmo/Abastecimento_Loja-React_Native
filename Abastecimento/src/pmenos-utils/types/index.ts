export interface IAuthContext {
    token?: string | null;
    signed: boolean;
    login: LoginHandler;
    logout: LogoutHandler;
    isValidToken: ValidTokenHandler;
};

export interface LoginHandler {
    (userId: string, password: string): Promise<boolean>;
};

export interface LogoutHandler {
    (): void;
};

export interface ValidTokenHandler {
    (): boolean;
};