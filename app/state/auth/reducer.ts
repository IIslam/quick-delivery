import { DefaultValueAccessor } from '@angular/forms/src/directives';
import { Action } from '@ngrx/store';

import { AuthorizationState } from './state';
import { AuthorizationActions } from './actions';


export function AuthorizationStateReducers(state: AuthorizationState, action: Action): AuthorizationState {

    switch (action.type) {
        // => login
        case AuthorizationActions.LOG_IN:
            return {
                ...state,
                errorMessage: null,
                isLoggedIn: false,
                token: null
            }
        case AuthorizationActions.LOG_IN_SUCCESS:
            console.log('login success Reducer');
            return {
                ...state,
                errorMessage: null,
                isLoggedIn: true,
                token: action.payload
            };
        case AuthorizationActions.LOG_IN_FAIL:
            console.log(`Login Error:${JSON.stringify(action.payload)}`);
            return {
                ...state,
                errorMessage: action.payload.error,
                isLoggedIn: false,
                token: null
            };
        // => register
        case AuthorizationActions.REGISTER_SUCCESS:
            console.log('register success');
            return Object.assign({}, state, { isRegister: true, token: action.payload });

        case AuthorizationActions.LOG_OUT:
            return Object.assign({}, state, { isLoggedIn: false, token: null });

        case AuthorizationActions.ACTIVATE_SUCCESS:
            console.log('activate sucess');
            return Object.assign({}, state, { isLoggedIn: true, isRegister: false });

        case AuthorizationActions.ACTIVATE_FAIL:
            console.log(`Activation Error:${action.payload}`);
            return state;

        case AuthorizationActions.REGISTER_FAIL:
            console.log(`Register Error:${action.payload}`);
            return state;
        case AuthorizationActions.ACTIVATE:
        case AuthorizationActions.REGISTER:
        default:
            return state;
    }
}
