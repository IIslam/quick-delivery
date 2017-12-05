import { Action } from '@ngrx/store';

import { LayoutActions } from './actions';
import { LayoutState } from './state';

import { AuthorizationActions } from '../auth/actions';

export function layoutReducer(state: LayoutState, action: Action): LayoutState {
    switch (action.type) {
        case LayoutActions.DISPLAY_ERROR:
            return {
                ...state,
                globalErrorMessage: action.payload
            }
        case LayoutActions.REMOVE_ERROR:
            return {
                ...state,
                globalErrorMessage: null
            }
        // => authorization
        case AuthorizationActions.LOG_IN:
            return {
                ...state,
                isLoading: true
            }
        case AuthorizationActions.LOG_IN_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case AuthorizationActions.LOG_IN_FAIL:
            return {
                ...state,
                isLoading: false
            }
        // => end authorization
        default:
            return state
    }
}
