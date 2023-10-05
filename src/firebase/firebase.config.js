// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN__MFP9roUy0OUgP_u6LPLekorzC0meI",
  authDomain: "react-dragon-news-auth-7372c.firebaseapp.com",
  projectId: "react-dragon-news-auth-7372c",
  storageBucket: "react-dragon-news-auth-7372c.appspot.com",
  messagingSenderId: "1041348810440",
  appId: "1:1041348810440:web:bab72cfee896a9efb977fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
export default auth;