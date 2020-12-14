export interface LoginHandler {
    (userId: string, password: string): Promise<boolean>;
};

export interface LogoutHandler {
    (): void;
};

export interface ValidTokenHandler {
    (): boolean;
};

export interface IAuthContext {
    token?: string | null;
    signed: boolean;
    login: LoginHandler;
    logout: LogoutHandler;
    isValidToken: ValidTokenHandler;
};

export interface IAppContext {
    name: string;
};

export interface IService {
    name: string;
    service: Object;
};

export interface IServicesContext {
    services: Array<IService>;
};

export interface IdentityServerConfigs {
    urlServer: string;
    clientId: string;
    clientSecret: string;
    app: string;
    scopes: Array<string>;
};

export interface TokenResponse {
    access_token: string;
};

export interface IProfile {
    sub: string;
    name: string;
    email: string;
    role: string;
    permissions: Array<string>;
    filial: number;
};