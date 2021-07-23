import { types } from '../../types/types';

const initialState = {
    loading : false,
    msgErr  : null
}

export const uiReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.uiSetErrors:
            return {
                ...state,
                msgErr: action.payload
            }
        
        case types.uiUnSetErrors:
            return {
                ...state,
                msgErr: null 
            }
        
        case types.uiStartLoading:
            return {
                ...state, 
                loading: true
            }

        case types.uiFinishLoading:
            return {
                ...state, 
                loading: false
            }

        default:
            return state;   
    }
};