import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { AuthProxyService, TokenStoreService } from '../../../app/proxy';

import { State } from '../state';
import { AuthorizationActions } from './actions';

@Injectable()
export class AuthorizationEffectsService {

    constructor(
        private actions$: Actions,
        private store: Store<State>,
        private tokenStoreService: TokenStoreService,
        private authProxyService: AuthProxyService) { }

    @Effect()
    onLogin(): Observable<Action> {
        return this.actions$
            .ofType(AuthorizationActions.LOG_IN)
            .switchMap(action => {
                return this.authProxyService.getTokenFromCredentials(action.payload)
                    .map(token => {
                        console.log(token.access_token);
                        this.tokenStoreService.setToken(token.access_token);
                        return AuthorizationActions.onLoginSuccess(action.payload, token);
                    })
                    .catch(error => {
                        return Observable.of(AuthorizationActions.createLoginFaildAction(error.json()));
                    });
            });
    }

    @Effect()
    onLoginSuccess(): Observable<Action> {
        return this.actions$
            .ofType(AuthorizationActions.ON_LOG_IN_SUCCESS)
            .switchMap(action => {
                return this.authProxyService.getUserType(action.payload.user)
                    .map(userType => {
                        console.log('UserType----------------');
                        console.log(userType);
                        return AuthorizationActions.saveUserType(userType.type);
                    })
                    .catch(error => {
                        return Observable.of(AuthorizationActions.createLoginFaildAction(error.json()));
                    });
            });
    }

    @Effect({ dispatch: false })
    onLogout() {
        return this.actions$
            .ofType(AuthorizationActions.LOG_OUT)
            .map(() => {
                this.tokenStoreService.setToken('');
            });
    }
}
