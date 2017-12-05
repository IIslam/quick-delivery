import { AuthorizationStateReducers } from './auth/reducer';
import { layoutReducer } from './layout/reducer';

export const reducer = {
    auth: AuthorizationStateReducers,
    layout: layoutReducer,
};
