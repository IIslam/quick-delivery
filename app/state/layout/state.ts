export interface LayoutState {
    globalErrorMessage: string;
    isLoading: boolean;
}

export const layoutInitialState: LayoutState = {
    globalErrorMessage: null,
    isLoading: false
};
