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

export interface IProfileContext {
    user?: IProfile | null;
};

export interface IProfile {
    matricula: string;
    name: string;
    filial: number;
    email: string;
    role: string;
    permissions: Array<string>;
}

export interface ICentrosDistribuicao {
    idCD: number;
    nomeFantasiaCD: string;
}