import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { State } from '../state';
import { AuthorizationActions } from './actions';
import { MembershipCredentialsModel, RegisterationModel } from '../../../app/proxy';

@Injectable()
export class AuthorizationStateService {

  constructor(private store: Store<State>) { }

  selectIsAuthenticatedType(): Observable<string> {
    return this.store.select(s => s.auth.type);
  }

  selectIsAuthenticated(): Observable<boolean> {
    return this.store.select(s => s.auth.isLoggedIn);
  }
  selectIsLoading(): Observable<Boolean> {
    return this.store.select(s => s.layout.isLoading);
  }

  selectErrorMessage(): Observable<string> {
    return this.store.select(s => s.auth.errorMessage);
  }

  selectCurrentToken(): Observable<string> {
    return this.store.select(s => s.auth.token.access_token);
  }

  selectISRegisterd(): Observable<boolean> {
    return this.store.select(s => s.auth.isRegister);
  }

  selectUsername(): Observable<string> {
    return this.store.select(s => s.auth.token.name);
  }
  // ------------------------------------------------------------------------

  dispatchRegisterAction(model?: RegisterationModel) {
    this.store.dispatch(AuthorizationActions.createRegisterAction(model));
  }

  // dispatchActivateACtion(model?: ActivateUserModel) {
  //   this.store.dispatch(AuthorizationActions.createActivateAction(model));
  // }

  dispatchLoginAction(model?: MembershipCredentialsModel): void {
    console.log('dispatchLoginAction');
    this.store.dispatch(AuthorizationActions.createLoginAction(model));
    console.log('dispatched');
  }

  dispatchLogoutAction(): void {
    this.store.dispatch(AuthorizationActions.createLogoutAction());
  }
}
