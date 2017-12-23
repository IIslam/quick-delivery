import { TokenStoreService } from '../proxy'
import { AuthorizationState, AuthorizationInitialState } from './auth/state';
import { LayoutState, layoutInitialState } from './layout/state';
import * as ApplicationSettings from 'application-settings';

export interface State {
    auth: AuthorizationState;
    layout: LayoutState;
}
export function initialState(tokenStoreService: TokenStoreService): State {
    const strStoredState = ApplicationSettings.getString('$$STATE'); // ApplicationSetting is like localStorage in Web
    const initial = {
        auth: AuthorizationInitialState,
        layout: layoutInitialState,
    }
    if (strStoredState) {
        const storedState = JSON.parse(strStoredState) as State;
        if (storedState.auth.token && storedState.auth.token.access_token && storedState.auth.type) {
            tokenStoreService.setToken(storedState.auth.token.access_token);
            console.log(`saved state Username:${storedState.auth.token.name}`);
            console.log(`saved state : ${storedState.auth.isLoggedIn}`);
            console.log('saved state type: ' + storedState.auth.type);
            return {
                ...initial,
                ...storedState
            };
        }
    }
    return initial;
}
