import { Action } from '@ngrx/store';
import { MembershipCredentialsModel, TokenDto, RegisterationModel } from '../../proxy';


export namespace AuthorizationActions {
    export const REGISTER = '[Auth] try to register';
    export const REGISTER_SUCCESS = '[Auth] register succeeded  and store token in state';
    export const REGISTER_FAIL = '[Auth] register ';
    export const ACTIVATE = '[Auth] try to activate';
    export const ACTIVATE_SUCCESS = '[Auth] activate succeede and store token in state';
    export const ACTIVATE_FAIL = '[Auth] activate fail';
    export const LOG_IN = '[Auth] try to login';
    export const ON_LOG_IN_SUCCESS = '[Auth] get user type';
    export const SAVE_USER_TYPE = '[Auth] save user type';
    export const LOG_IN_SUCCESS = '[Auth] login succeeded add token to state';
    export const LOG_IN_FAIL = '[Auth] login failed Add Error Message';
    export const LOG_OUT = '[Auth] revoke token';

    export function onLoginSuccess(user: any, token: TokenDto): Action {
        console.log('onlogin success');
        console.log(user.email);
        return {
            type: ON_LOG_IN_SUCCESS,
            payload: {
                user: user,
                token: token
            }
        };
    }

    export function saveUserType(type: string): Action {
        console.log('Save user Type');
        return {
            type: SAVE_USER_TYPE,
            payload: type
        };
    }

    export function createRegisterAction(user: RegisterationModel): Action {
        return {
            type: REGISTER,
            payload: user
        };
    }
    export function createRegisterSuccessAction(token: TokenDto): Action {
        return {
            type: REGISTER_SUCCESS,
            payload: token
        };
    }

    export function createRegisterFailAction(error: string): Action {
        return {
            type: REGISTER_FAIL,
            payload: error
        }
    }

    export function createActivateSuccessAction(token: TokenDto): Action {
        return {
            type: ACTIVATE_SUCCESS,
            payload: token
        };
    }

    export function createActivateFailAction(error: string): Action {
        return {
            type: ACTIVATE_FAIL,
            payload: error
        }
    }
    export function createLoginAction(user: MembershipCredentialsModel): Action {
        return {
            type: LOG_IN,
            payload: user
        };
    }

    export function createLoginSuccessAction(token: TokenDto): Action {
        return {
            type: LOG_IN_SUCCESS,
            payload: token
        };
    }

    export function createLoginFaildAction(errorMsg: string): Action {
        return {
            type: LOG_IN_FAIL,
            payload: errorMsg
        };
    }

    export function createLogoutAction(): Action {
        return {
            type: LOG_OUT
        };
    }

}
