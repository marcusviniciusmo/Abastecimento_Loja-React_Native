import axios, { AxiosInstance, AxiosResponse } from 'axios';
import qs from 'querystring';
import jwt_decode from 'jwt-decode';
import {
    IdentityServerConfigs,
    TokenResponse,
    IProfile
} from '../pmenos-utils/types';

export default class IdentityServerClient {
    private config: IdentityServerConfigs;
    private client: AxiosInstance;

    constructor(config: IdentityServerConfigs){
        this.config = config;
        this.client = axios.create({
            baseURL: this.config.urlServer,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
    }

    /* Get Token */
    public async getToken(
        userId: string,
        password: string,
    ): Promise<AxiosResponse<TokenResponse>> {
        const data = {
            username: userId,
            password: password,
            grant_type: 'password',
            client_id: this.config.clientId,
            client_secret: this.config.clientSecret,
            app: this.config.app,
            scope: this.config.scopes.join(' '),
        };

        return await this.client.post('/connect/token', qs.stringify(data));
    }

    public async getProfile(
        accessToken: string,
    ): Promise<AxiosResponse<IProfile>> {
        this.client.defaults.headers.Authorizations = `Bearer ${accessToken}`;

        return await this.client.get('/connect/userinfo');
    }

    public validToken(accessToken: string | undefined | null): boolean {
        if (!accessToken) {
            return false;
        }

        const accessTokenDecoded = jwt_decode<{
            exp: number;
            role: undefined | string | Array<string>;
        }>(accessToken);

        if (!accessTokenDecoded.role){
            return false;
        }

        const dataExpira: number = accessTokenDecoded.exp * 1000;
        const dataAtual = Date.now();

        if (dataExpira <= dataAtual) {
            return false;
        }

        return true;
    }
}