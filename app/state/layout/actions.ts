import { Action } from '@ngrx/store';

export namespace LayoutActions {
    export const DISPLAY_ERROR = '[layout] display global error';
    export const REMOVE_ERROR = '[layout] remove global error';

    export function createDisplayErrorAction(error: string): Action {
        return {
            type: DISPLAY_ERROR,
            payload: error
        }
    }

    export function createRemoveErrorAction() {
        return {
            type: REMOVE_ERROR
        };
    }
}
