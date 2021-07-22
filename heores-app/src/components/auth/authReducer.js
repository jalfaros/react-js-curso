import { types } from "../types/types";




export const authReducer = ( state = {}, action ) => {

    switch ( action.type ) {
        
        case types.login:

            return {
                ...action.payload,
                isAuth: true
            }

        case types.logout:
            
            return {
                isAuth: false
            }

        default:
            return state;
    }
};