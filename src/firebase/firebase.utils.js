import firebase from "firebase/compat";
import "firebase/firestore";
import "firebase/auth";


const Config = {
    apiKey: "AIzaSyA3I6fUNV8cka8yoyulTOKhLPo6KaicrTk",
    authDomain: "crwn-31726.firebaseapp.com",
    projectId: "crwn-31726",
    storageBucket: "crwn-31726.appspot.com",
    messagingSenderId: "21058399506",
    appId: "1:21058399506:web:8830e38e728da8fcd357cb",
    measurementId: "G-28SKX8ELS5"
}

firebase.initializeApp(Config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
