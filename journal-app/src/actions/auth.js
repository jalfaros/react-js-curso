import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from "../types/types"


export const startLoginEmailPassword = ( email, password ) => { //Pendiente

    return ( dispatch ) => {
        setTimeout(() => {

            dispatch( loginAction('124', 'Ignacio Alfaro') );
        
        }, 3500);
    }
};


export const googleLogin = () => {

    return async ( dispatch ) => {
        const { user } = await firebase.auth().signInWithPopup( googleAuthProvider );
        dispatch( loginAction( user.uid, user.displayName ) )
    };
};


export const loginAction = ( uid, displayName ) => ({
    type: types.login,
    payload: {
        uid,
        displayName,
    }
})




