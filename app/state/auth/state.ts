import { TokenDto } from '../../../app/proxy';
export interface AuthorizationState {
    token: TokenDto;
    isLoggedIn: boolean;
    isRegister: boolean;
    errorMessage: string;
    type: number;
}

export const AuthorizationInitialState: AuthorizationState = {
    token: null,
    isLoggedIn: false,
    isRegister: false,
    errorMessage: null,
    type: null
};
