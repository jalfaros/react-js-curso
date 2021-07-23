import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from "../types/types"
import { setErrorAction, uiFinishLoading, uiStartLoading, } from './ui';


export const startLoginEmailPassword = ( email, password ) => { //Pendiente

    return async ( dispatch ) => {

        try{
            dispatch( uiStartLoading() )
            const { user } = await firebase.auth().signInWithEmailAndPassword( email, password );
            console.log( user )
            dispatch( loginAction( user.uid, user.displayName ) )
            dispatch( uiFinishLoading() )

        }catch( err ){

            dispatch( uiFinishLoading() );
            console.log( err )
        }
        
    }
};


export const registerWithPassword = ( { email, password, name } ) => {

    return async ( dispatch ) => {
        try{
            
            const { user } = await firebase.auth().createUserWithEmailAndPassword( email, password); 
            await user.updateProfile( { displayName: name } );
            dispatch( loginAction( user.uid, user.displayName ) );

        }catch( error ){
            dispatch( setErrorAction( error.message ) )
        }}
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




