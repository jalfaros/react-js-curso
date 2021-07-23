import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyC3c2Tt4_uG_wi8rqPKQUyotCVeauANXBQ",
    authDomain: "journalapp-react-redux.firebaseapp.com",
    projectId: "journalapp-react-redux",
    storageBucket: "journalapp-react-redux.appspot.com",
    messagingSenderId: "776502501875",
    appId: "1:776502501875:web:899531589494e81d91b286"
};


firebase.initializeApp( firebaseConfig );

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider, 
    firebase
}