import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBsboJvOoj5o8VPC1rGVHoeyWQiXVoSFmc",
  authDomain: "makemake-web.firebaseapp.com",
  projectId: "makemake-web",
  storageBucket: "makemake-web.appspot.com",
  messagingSenderId: "696117383204",
  appId: "1:696117383204:web:61f8dfd050fdf941bf48b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();

const db = getFirestore();

export {
    app,
    db,
    google,
}