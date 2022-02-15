import { typesLogin } from '../types/types';
import { getAuth, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { google } from '../firebase/firebaseConfig';

// Action logout async
export const logout = () => {
    return () => {

    }
}

// Action logout sync
export const logoutSync = () => {
    return {
        type: typesLogin.logout,
        payload: {}
    }
}

// Action login google async

//  Action login sync
export const loginSync = (id, displayname) => {
    return {
        type: typesLogin.login,
        payload: {
            id,
            displayname
        }
    }
}