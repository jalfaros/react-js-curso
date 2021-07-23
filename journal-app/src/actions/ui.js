import { types } from '../types/types';

export const setErrorAction = ( error ) => ({
    type: types.uiSetErrors,
    payload: error
});

export const removeErrorAction = () => ({
    type: types.uiUnSetErrors
});

export const uiStartLoading = () => ({
    type: types.uiStartLoading
});

export const uiFinishLoading = () => ({
    type: types.uiFinishLoading
});




