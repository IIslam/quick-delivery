import { TokenDto } from '../../../app/proxy';
export interface AuthorizationState {
    token: TokenDto;
    isLoggedIn: boolean;
    isRegister: boolean;
    errorMessage: string;

}

export const AuthorizationInitialState: AuthorizationState = {
    token: null,
    isLoggedIn: true,
    isRegister: false,
    errorMessage: null
};
