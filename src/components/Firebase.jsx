// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXUHfdUIlbK_3OO4h_I2dBUX4Grq6qUMM",
  authDomain: "authentication-9a30f.firebaseapp.com",
  projectId: "authentication-9a30f",
  storageBucket: "authentication-9a30f.firebasestorage.app",
  messagingSenderId: "630823960302",
  appId: "1:630823960302:web:78207655cd915562bfbdff",
  measurementId: "G-CMTP8GDV6P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {auth}
