// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk9DKfIqx3eG9OOp_u9TyHexRMnkxN6S4",
  authDomain: "recipes-web-react.firebaseapp.com",
  projectId: "recipes-web-react",
  storageBucket: "recipes-web-react.firebasestorage.app",
  messagingSenderId: "386689985191",
  appId: "1:386689985191:web:20989a5ce37c0df63f0982",
  measurementId: "G-T1760RY3LE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db =  getFirestore(app)

export const auth = getAuth(app)