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
    onRegister(): Observable<Action> {
        return this.actions$
            .ofType(AuthorizationActions.REGISTER)
            .switchMap(action => {
                return this.authProxyService.getTokenFromRegister(action.payload)
                    .map(token => {
                        this.tokenStoreService.setToken(token.access_token);
                        return AuthorizationActions.createRegisterSuccessAction(token);
                    })
                    .catch(error => {
                        return Observable.of(AuthorizationActions.createRegisterFailAction(error.text()));
                    });
            });
    }

    // @Effect()
    // onActivate(): Observable<Action> {
    //     return this.actions$
    //         .ofType(AuthorizationActions.ACTIVATE)
    //         .switchMap(action => {
    //             return this.authProxyService.getTokenFromActivate(action.payload)
    //                 .map(token => {
    //                     this.tokenStoreService.setToken(token.access_token);
    //                     return AuthorizationActions.createActivateSuccessAction(token);
    //                 })
    //                 .catch(error => {
    //                     return Observable.of(AuthorizationActions.createActivateFailAction(error));
    //                 });
    //         });
    // }

    @Effect()
    onLogin(): Observable<Action> {
        return this.actions$
            .ofType(AuthorizationActions.LOG_IN)
            .switchMap(action => {
                return this.authProxyService.getTokenFromCredentials(action.payload)
                    .map(token => {
                        this.tokenStoreService.setToken(token.access_token);
                        return AuthorizationActions.createLoginSuccessAction(token);
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
