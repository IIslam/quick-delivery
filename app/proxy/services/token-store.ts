import { Injectable } from '@angular/core';

@Injectable()
export class TokenStoreService {
    private _token: string;

    getToken(): string {
        return this._token;
    }

    setToken(token: string) {
        this._token = token;
    }
}
